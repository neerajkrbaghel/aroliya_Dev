"use client";

import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (currentUser) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("disconnected");
  const reconnectTimeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !currentUser?.id) return;

    const socketUrl =
      process.env.NEXT_PUBLIC_SOCKET_URL || window.location.origin;
    console.log("🔌 Connecting to socket server:", socketUrl);

    const newSocket = io(socketUrl, {
      transports: ["websocket", "polling"],
      timeout: 10000,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      path: "/api/socketio/",
    });

    newSocket.on("connect", () => {
      console.log("✅ Connected to server:", newSocket.id);
      setIsConnected(true);
      setConnectionStatus("connected");

      // Join user room
      newSocket.emit("join_user", currentUser.id);
    });

    newSocket.on("connection_confirmed", (data) => {
      console.log("✅ Connection confirmed:", data);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("❌ Disconnected from server. Reason:", reason);
      setIsConnected(false);
      setConnectionStatus("disconnected");

      if (reason !== "io client disconnect") {
        reconnectTimeoutRef.current = setTimeout(() => {
          console.log("🔄 Attempting to reconnect...");
          // The hook will re-run and create a new connection
        }, 3000);
      }
    });

    newSocket.on("connect_error", (error) => {
      console.error("❌ Socket connection error:", error);
      setConnectionStatus("error");
    });

    newSocket.on("reconnect_attempt", (attempt) => {
      console.log(`🔄 Reconnection attempt ${attempt}`);
      setConnectionStatus(`reconnecting (${attempt})`);
    });

    newSocket.on("reconnect_failed", () => {
      console.error("❌ Reconnection failed");
      setConnectionStatus("failed");
    });

    // Ping/pong for connection monitoring
    const pingInterval = setInterval(() => {
      if (newSocket.connected) {
        newSocket.emit("ping", { timestamp: Date.now() });
      }
    }, 30000);

    newSocket.on("pong", (data) => {
      console.log("🏓 Pong received:", data);
    });

    setSocket(newSocket);

    return () => {
      clearInterval(pingInterval);
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      newSocket.disconnect();
    };
  }, [currentUser?.id]);

  return {
    socket,
    isConnected,
    connectionStatus,
  };
};

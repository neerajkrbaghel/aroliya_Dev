export const dynamic = "force-dynamic";

import Razorpay from "razorpay";

// 🔥 LAZY INITIALIZATION FIX (same as client-payment)
function createRazorpay() {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

async function getYearlyRevenue() {
  // Razorpay should be created ONLY inside function at runtime
  const razorpay = createRazorpay();

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1, 0, 0, 0);
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

  const from = Math.floor(startOfYear.getTime() / 1000);
  const to = Math.floor(endOfYear.getTime() / 1000);

  const payments = await razorpay.payments.all({ from, to, count: 100 });

  const yearlyRevenue = payments.items
    .filter((p) => p.status === "captured")
    .reduce((sum, p) => sum + p.amount / 100, 0);

  return yearlyRevenue;
}

export async function GET() {
  try {
    const yearlyRevenue = await getYearlyRevenue();
    return new Response(JSON.stringify({ yearlyRevenue }), { status: 200 });
  } catch (err) {
    console.error("Razorpay API Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}

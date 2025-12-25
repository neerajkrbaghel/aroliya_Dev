// app/api/client/my-jobs/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    console.log('🔍 Fetching jobs for user ID:', userId);

    if (!userId) {
      return NextResponse.json(
<<<<<<< HEAD
        {
          success: false,
          error: 'User ID is required'
=======
        { 
          success: false,
          error: 'User ID is required' 
>>>>>>> 744bd99 (Update code from new location)
        },
        { status: 400 }
      );
    }

    // Fetch jobs for this user
    const jobs = await prisma.jobPost.findMany({
      where: {
        userId: parseInt(userId)
      },
      include: {
        _count: {
          select: {
<<<<<<< HEAD
            proposal: true
=======
            proposals: true
>>>>>>> 744bd99 (Update code from new location)
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`✅ Found ${jobs.length} jobs for user ${userId}`);

    // Parse skills for each job safely
    const jobsWithParsedSkills = jobs.map(job => {
      let skills = [];
      try {
        if (job.skills) {
          skills = JSON.parse(job.skills);
        }
      } catch (error) {
        console.error('Error parsing skills for job', job.id, error);
        skills = [];
      }
<<<<<<< HEAD

=======
      
>>>>>>> 744bd99 (Update code from new location)
      return {
        ...job,
        skills,
        createdAt: job.createdAt.toISOString(),
        updatedAt: job.updatedAt.toISOString(),
        deadline: job.deadline.toISOString()
      };
    });

<<<<<<< HEAD
    return NextResponse.json({
      success: true,
      jobs: jobsWithParsedSkills
    });

  } catch (error) {
    console.error('❌ Get my jobs error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch jobs',
        details: error.message
=======
    return NextResponse.json({ 
      success: true,
      jobs: jobsWithParsedSkills 
    });
    
  } catch (error) {
    console.error('❌ Get my jobs error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch jobs',
        details: error.message 
>>>>>>> 744bd99 (Update code from new location)
      },
      { status: 500 }
    );
  }
}
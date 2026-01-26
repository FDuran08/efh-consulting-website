import { NextRequest, NextResponse } from 'next/server';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

// CRM API endpoint
const CRM_API_URL = process.env.CRM_API_URL || 'https://your-crm.onrender.com';

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service || !body.date || !body.time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send to CRM to create lead + booking
    try {
      const crmResponse = await fetch(`${CRM_API_URL}/api/public/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          service: body.service,
          source: 'booking',
          bookingDate: body.date,
          bookingTime: body.time,
        }),
      });

      if (!crmResponse.ok) {
        console.error('CRM API error:', await crmResponse.text());
        // Don't fail the user request if CRM is down
      }
    } catch (crmError) {
      console.error('Failed to send to CRM:', crmError);
      // Log but don't fail - we still want to respond to the user
    }

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

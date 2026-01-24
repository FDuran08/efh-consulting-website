import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
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

    // Log the submission (in production, you would send an email or save to database)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'Not provided',
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // In a production environment, you would:
    // 1. Send an email notification using a service like SendGrid, Resend, or AWS SES
    // 2. Save the submission to a database
    // 3. Integrate with a CRM system

    // Example with Resend (uncomment and configure when ready):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'EFH Consulting <noreply@efhconsultinggroup.com>',
    //   to: 'contact@efhconsultinggroup.com',
    //   subject: `New Contact Form Submission from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
    //     <p><strong>Service Interest:</strong> ${body.service}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

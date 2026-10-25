import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json(
        { error: "Bot activity detected." },
        { status: 400 }
      );
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message containing at least 10 characters." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "amritanshu.1si23ec002@gmail.com";

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `Portfolio message from ${name.trim()}`
    )}&body=${encodeURIComponent(
      `From: ${email.trim()}\n\n${message.trim()}`
    )}`;

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Form delivery is not configured for this deployment. Please use the email button to send your message directly.",
          mailto,
        },
        { status: 503 }
      );
    }

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email,
        subject: `Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendRes.ok) {
      console.error("Resend API error:", await resendRes.text());
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery failed. Please contact me directly via email.",
          mailto,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred. Please try again or use direct email.",
      },
      { status: 500 }
    );
  }
}

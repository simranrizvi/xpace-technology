import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
      port: process.env.SMTP_PORT || 587, // 587 for TLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your SMTP email
        pass: process.env.SMTP_PASS, // your SMTP password / app password
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Form</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>WhatsApp:</b> ${body.whatsapp}</p>
        <p><b>Identity:</b> ${body.identity}</p>
        <p><b>Company:</b> ${body.company}</p>
        <p><b>Budget:</b> $${body.budget}</p>
        <p><b>Message:</b><br/>${body.message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, message } = body;

    if (!name || !email || !mobile || !message) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields.",
          event: "validation_error",
        },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      TO_EMAIL,
      FROM_EMAIL,
      WHATSAPP_TOKEN,
      WHATSAPP_PHONE_ID,
      WHATSAPP_TO,
    } = process.env;

    let emailSent = false;
    let waSent = false;

    // EMAIL SEND
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && TO_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
          from: FROM_EMAIL || SMTP_USER,
          to: TO_EMAIL,
          subject: `New Inquiry — ${name}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${mobile}</p>
            <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
          `,
        });

        emailSent = true;
      } catch (err) {
        console.error("Email error:", err);
      }
    }

    // WHATSAPP SEND
    if (WHATSAPP_TOKEN && WHATSAPP_PHONE_ID && WHATSAPP_TO) {
      try {
        const payload = {
          messaging_product: "whatsapp",
          to: WHATSAPP_TO,
          type: "text",
          text: {
            body: `📩 New Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${mobile}\nMessage:\n${message}`,
          },
        };

        const url = `https://graph.facebook.com/v20.0/${WHATSAPP_PHONE_ID}/messages`;

        const waRes = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (waRes.ok) waSent = true;
      } catch (err) {
        console.error("WhatsApp error:", err);
      }
    }

    return Response.json(
      {
        success: true,
        email_sent: emailSent,
        whatsapp_sent: waSent,
        event: "contact_form_submitted",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        error: "Internal server error",
        event: "server_error",
      },
      { status: 500 }
    );
  }
}

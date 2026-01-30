// Vercel Node runtime expects CommonJS for functions in this setup.
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req: any, res: any): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, phone, email } = req.body ?? {};

  if (!name || !phone || !email) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const emailValid = /\S+@\S+\.\S+/.test(String(email));
  const phoneValid = String(phone).replace(/[^\d+]/g, "").length >= 7;

  if (!emailValid) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }
  if (!phoneValid) {
    res.status(400).json({ error: "Invalid phone number." });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    res.status(500).json({ error: "Missing contact destination email." });
    return;
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "PureOrigins <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: "PureOrigins contact request",
      reply_to: String(email),
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
    });

    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
};

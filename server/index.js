import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import pkg from '@prisma/client';
import { rateLimit } from 'express-rate-limit';

const { PrismaClient } = pkg;
dotenv.config();

const app = express();
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const transmitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3,
  message: { success: false, error: "Too many requests. Please wait 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors());
app.use(express.json());

app.post('/api/transmit', transmitLimiter, async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields." });
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: { firstName, lastName, email, message }
    });

    await resend.emails.send({
      from: 'Cosmolix Systems <info@cosmolix.co.in>',
      to: 'info@cosmolix.co.in',
      replyTo: email,
      subject: `New Message From: ${firstName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #2563EB;">Internal Alert: New Inquiry</h2>
          <p><strong>From:</strong> ${firstName} ${lastName || ''} (${email})</p>
          <p><strong>Message:</strong> ${message}</p>
          <p style="font-size: 10px; color: #94A3B8;">Submission ID: ${submission.id}</p>
        </div>
      `
    });

    await resend.emails.send({
      from: 'Cosmolix Systems <info@cosmolix.co.in>',
      to: email,
      subject: 'Inquiry Received | Cosmolix Private Limited',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #E2E8F0; padding: 40px; border-radius: 24px;">
          <h1 style="color: #2563EB; font-size: 24px;">Message Received.</h1>
          <p>Hello ${firstName},</p>
          <p>Your message has been successfully synchronized with <strong>Cosmolix</strong>. Our engineering team has been notified.</p>
          <div style="background: #F8FAFF; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #64748B;"><strong>Next Steps:</strong> We typically review all partnership requests within 24 standard business hours.</p>
          </div>
          <p style="font-size: 12px; color: #94A3B8;">Ref ID: ${submission.id}</p>
          <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 30px 0;" />
          <p style="font-size: 14px; font-weight: bold; color: #0F172A;">Cosmolix Private Limited | Engineering Tomorrow</p>
        </div>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Transmission Error:", error);
    res.status(500).json({ success: false, error: "Transmission interrupted." });
  }
});

app.post('/api/internship/apply', async (req, res) => {
  const { name, email, phone, domain, college, paymentId } = req.body;

  if (!name || !email || !paymentId) {
    return res.status(400).json({ success: false, error: "Incomplete application data." });
  }

  try {
    const intern = await prisma.internApplication.create({
      data: { name, email, phone, domain, college, paymentId }
    });

    await resend.emails.send({
      from: 'Cosmolix Internships <info@cosmolix.co.in>',
      to: 'info@cosmolix.co.in',
      subject: `New Internship Enrollment: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #2563EB;">Payment Received: ${domain}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Transaction ID:</strong> ${paymentId}</p>
          <p><strong>Intern ID:</strong> ${intern.id}</p>
        </div>
      `
    });

    await resend.emails.send({
      from: 'Cosmolix Onboarding <info@cosmolix.co.in>',
      to: email,
      subject: 'Enrollment Confirmation: Industrial Internship Program 2026',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #E2E8F0; padding: 40px; border-radius: 24px;">
          <h1 style="color: #2563EB; font-size: 24px;">Enrollment Successful.</h1>
          <p>Dear ${name},</p>
          <p>Congratulations. Your application for the <strong>${domain}</strong> program has been processed.</p>
          <div style="background: #F8FAFF; padding: 20px; border-radius: 12px; margin: 20px 0;">
             <p><strong>Next Steps:</strong> Check your email within 48h for your Offer Letter.</p>
             <a href="https://chat.whatsapp.com/JtK1a5O0ILG7E0olsYkbvv" style="color: #25D366; font-weight: bold;">Join WhatsApp Community</a>
          </div>
          <p style="font-size: 10px; color: #94A3B8;">Transaction: ${paymentId}</p>
        </div>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("INTERNSHIP ROUTE ERROR:", error); 
    res.status(500).json({ success: false, error: "Server synchronization failed." });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Cosmolix Local Engine Active on Port ${PORT}`));
}

export default app;
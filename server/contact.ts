import type { Express, Request, Response } from "express";
import { transporter } from "./email";

export function registerContactRoutes(app: Express) {
  app.post("/api/contact", async (req: Request, res: Response) => {
    const { name, email, message, type, phone } = req.body;

    if (!name || !email || !message || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      await transporter.sendMail({
        from: `"Elite Player Media" <${process.env.EMAIL_USER}>`,
        to: `${process.env.EMAIL_USER}`,
        replyTo: email,
        subject: `New Contact Request — ${type}`,
        html: `
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.json({ success: true });
    } catch (err) {
      console.error("Email error:", err);
      res.status(500).json({ message: "Failed to send email" });
    }
  });
}

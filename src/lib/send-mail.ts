"use server";

import { EmailTemplate } from "@/components/email-template";
import { formSchema } from "@/components/contact-me";
import z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function sendMail(formData: z.infer<typeof formSchema>) {
  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL!],
      subject: "New message from your portfolio",
      replyTo: formData.email,
      react: EmailTemplate({
        firstName: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (error) throw error;
  } catch (error) {
    throw error;
  }
}

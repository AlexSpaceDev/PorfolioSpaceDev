import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  submitContact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      mission_type: z.enum(["web", "gaming", "apps", "arvr", "other"]),
      message: z.string().min(10),
    }),
    handler: async (data) => {
      await resend.emails.send({
        from: "Space DEV <onboarding@resend.dev>",
        to: import.meta.env.CONTACT_EMAIL,
        subject: `Nueva misión: ${data.mission_type.toUpperCase()}`,
        html:`
          <h2> Nueva misión recibida </h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Tipo de misión:</strong> ${data.mission_type}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${data.message}</p>
        `,
      })

      return { success: true };
    },
  }),
};


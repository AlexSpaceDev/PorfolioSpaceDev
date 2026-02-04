import { defineAction } from "astro:actions";
import { z } from "astro/zod";

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
      console.log("Nuevo contacto:", data);
      return { success: true };
    },
  }),
};


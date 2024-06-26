import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

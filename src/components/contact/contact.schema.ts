import { z } from 'zod';

export const ContactFormSchema = z.object({
  email: z.string(),
  message: z.string(),
});

export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

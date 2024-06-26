'use server';

import { actionClient } from '@/lib/server-actions/safe-actions';
import { ContactFormSchema } from './contact.schema';
import { sendEmail } from '@/lib/mail/sendEmail';
import { SiteConfig } from '@/lib/site-config';
import { EmailTemplate } from './email-template';

export const contactMeAction = actionClient(ContactFormSchema, async (data) => {
  const { email, message } = data;

  await sendEmail({
    from: SiteConfig.email.from,
    to: SiteConfig.email.contact,
    subject: `Portfolio email from ${email}`,
    react: EmailTemplate({ email, message }),
    reply_to: email,
  });

  return { sucess: 'Message envoyé' };
});

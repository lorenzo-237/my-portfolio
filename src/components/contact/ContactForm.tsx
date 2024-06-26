'use client';

import React from 'react';
import { Button } from '../ui/button';
import { ContactFormSchema, ContactFormSchemaType } from './contact.schema';
import { contactMeAction } from './contact.action';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { toast } from 'sonner';
import { MailIcon } from 'lucide-react';
import { SiteConfig } from '@/lib/site-config';

function ContactForm() {
  const form = useZodForm({
    schema: ContactFormSchema,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormSchemaType) => {
    const { data, serverError } = await contactMeAction(values);

    if (!data) {
      toast.error(serverError);
      return;
    }

    toast.success("Message envoyé ! Vous pouvez attente une réponse de ma part d'ici quelques temps.");
    form.reset();
  };

  return (
    <Card className='p-4'>
      <CardHeader>
        <CardDescription className='flex items-center gap-2'>
          <MailIcon className='size-4' /> {SiteConfig.email.contact}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form form={form} onSubmit={async (v) => onSubmit(v)} className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre email*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Envoyer</Button>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;

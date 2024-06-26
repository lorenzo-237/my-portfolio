'use client';

import React from 'react';
import { Button } from '../ui/button';
import { ContactFormSchema, ContactFormSchemaType } from './contact.schema';
import { contactMeAction } from './contact.action';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { toast } from 'sonner';

function ContactForm() {
  const form = useZodForm({
    schema: ContactFormSchema,
    defaultValues: {
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
      <CardContent>
        <Form form={form} onSubmit={async (v) => onSubmit(v)} className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Message</FormLabel>
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

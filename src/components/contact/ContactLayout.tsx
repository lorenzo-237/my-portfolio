import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import ContactForm from './ContactForm';

function ContactLayout() {
  return (
    <div className='relative h-full sm:h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <p>Contact</p>
          <ContactForm />
        </LayoutContent>
      </Layout>
    </div>
  );
}

export default ContactLayout;

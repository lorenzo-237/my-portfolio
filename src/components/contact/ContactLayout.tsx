import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import ContactForm from './ContactForm';
import { Typography } from '../ui/typography';
import Footer from '../Footer';

function ContactLayout() {
  return (
    <div className='relative h-full sm:h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <div className='w-full'>
            <Typography variant='h2' className='uppercase underline text-2xl md:text-4xl'>
              Contactez moi
            </Typography>
          </div>
          <div className='w-full text-justify space-y-6'>
            <ul className='space-y-6'>
              <li>
                <Typography variant='p'>
                  Je suis ravi de savoir que vous souhaitez entrer en contact avec moi ! Que ce soit pour discuter
                  d&apos;un projet, poser des questions ou simplement échanger, n&apos;hésitez pas à me laisser un
                  message. Veuillez remplir les champs ci-dessous et je vous répondrai dès que possible.
                </Typography>
              </li>
            </ul>
            <ContactForm />
          </div>
        </LayoutContent>
      </Layout>
      <Footer />
    </div>
  );
}

export default ContactLayout;

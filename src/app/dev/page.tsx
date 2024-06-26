import { Layout, LayoutContent } from '@/components/pages/layout';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className='relative h-full sm:h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <p>La page que vous avez demandé est en cours de construction.</p>
          <p>Envoyez moi un mail si vous avez besoin d&apos;une information.</p>
          <Link href='/contact' className={buttonVariants()}>
            Contactez moi !
          </Link>
        </LayoutContent>
      </Layout>
    </div>
  );
}

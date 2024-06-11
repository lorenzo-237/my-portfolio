import AboutMe from '@/components/landing/AboutMe';
import ContactForm from '@/components/landing/ContactForm';
import HeroSection from '@/components/landing/HeroSection';
import MyEducation from '@/components/landing/MyEducation';
import MyProjects from '@/components/landing/MyProjects';
import Skills from '@/components/landing/Skills';
import Navbar from '@/components/nav/Navbar';

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <MyProjects />
      <MyEducation />
      <ContactForm />
    </main>
  );
}

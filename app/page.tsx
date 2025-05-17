import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import Header from '../components/header';
import Features from '../components/Features';
export default function Page() {
return (
<main className="flex flex-col items-center space-y-20 py-16">
 <Header />
<Hero />
 <Features />
<WhyChooseUs />
<Testimonials />
<ContactForm />
<ChatWidget />
</main>
);
}
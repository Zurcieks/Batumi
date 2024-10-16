import { Metadata } from "next";
import dynamic from "next/dynamic";
 
const HeroContact = dynamic(() => import("../../../../enPageComponents/enContactComponents/enHeroContact"), {ssr: true});
const ContactForm = dynamic(() => import("../../../../enPageComponents/enContactComponents/enContactForm"), { ssr: true });

export const metadata: Metadata = {
  title: "InvestinGeorgia - Contact",
  description: "Contact with us about a property in Batumi and we will respond within a few days!",
};

const ContactPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden ">
      <header >
      <HeroContact/>
      </header>
      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;

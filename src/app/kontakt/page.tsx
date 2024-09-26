import { Metadata } from "next";
import dynamic from "next/dynamic";
 
const HeroContact = dynamic(() => import("../../../pageComponents/ContactComponents/HeroContact"), {ssr: true});
const ContactForm = dynamic(() => import("../../../pageComponents/ContactComponents/ContactForm"), { ssr: true });

export const metadata: Metadata = {
  title: "InvestinGeorgia - Kontakt",
  description: "Skontaktuj się z nami w sprawie nieruchomości w Batumi, a odpowiemy w ciągu kilku dni!",
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

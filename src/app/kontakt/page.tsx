import { Metadata } from "next";
const Banner = dynamic(() => import("../../../components/Banner"), { ssr: true });
import bannerImg from "../../../Images/Batumi1.jpg";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../../../pageComponents/ContactComponents/ContactForm"), { ssr: true });

export const metadata: Metadata = {
  title: "Kontakt - Nieruchomości Batumi",
  description: "Skontaktuj się z nami w sprawie nieruchomości w Batumi, a odpowiemy w ciągu kilku dni!",
};

const ContactPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <header>
        <Banner
          isButtonShown={false}
          bannerImage={bannerImg}
          title="Skontaktuj się z nami!"
        />
      </header>
      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;

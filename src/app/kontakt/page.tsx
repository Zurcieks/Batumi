import Head from "next/head";
const Banner = dynamic(() => import("../../../components/Banner"), { ssr: true });
import bannerImg from "../../../Images/Batumi1.jpg"
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../../../pageComponents/ContactComponents/ContactForm"), { ssr: true });


const Page: React.FC = () => {
    return (
      <div>
        <Head>
            
          <title>Nieruchomości w Batumi - Kontakt</title>
          <meta
            name="description"
            content="Skontaktuj się z nami, a odpowiemy w ciągu kilku dni!"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
        </Head>
        <div className="overflow-x-hidden overflow-y-hidden">
          <header>
            <Banner
              isButtonShown={false}
              bannerImage={bannerImg}
              title="Kontakt"
            />
          </header>
          <section>
            <ContactForm/>
          </section>
      </div>
      </div>
    );
  };
  
  export default Page;
  
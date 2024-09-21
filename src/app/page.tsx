"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic"; // Importujemy dynamiczne ładowanie


// Dynamiczne ładowanie komponentów
const Banner = dynamic(() => import("../../components/Banner"), { ssr: false });
const BannerMobile = dynamic(() => import("../../components/BannerMobile"), { ssr: false });
const InformationSection = dynamic(() => import("../../pageComponents/HomeComponents/InformationSection"), { ssr: false });
const AboutSection = dynamic(() => import("../../pageComponents/HomeComponents/AboutSection"), { ssr: false });
const ServiceSection = dynamic(() => import("../../pageComponents/HomeComponents/ServiceSection"), { ssr: false });
const InvestingSection = dynamic(() => import("../../pageComponents/HomeComponents/InvestingSection"), {ssr: false})

import bannerImg from "./../../Images/HeaderImg.jpg";
import ContactSection from "../../pageComponents/HomeComponents/ContactSection";


const Page: React.FC = () => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderBanner = () => {
    if (deviceType === "mobile") {
      return (
        <BannerMobile
          isButtonShown={true}
          bannerImage={bannerImg}
          title="Nieruchomości w Batumi"
        />
      );
    } else if (deviceType === "tablet") {
      return (
        <BannerMobile
          isButtonShown={true}
          bannerImage={bannerImg}
          title="Nieruchomości w Batumi"
        />
      );
    } else {
      return (
        <Banner
          isButtonShown={true}
          bannerImage={bannerImg}
          title="Nieruchomości w Batumi - Desktop!"
        />
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Nieruchomości w Batumi - Strona główna</title>
        <meta
          name="description"
          content="Znajdź idealne nieruchomości w Batumi. Oferujemy różnorodne opcje dla każdego. Sprawdź naszą ofertę!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <div className="overflow-x-hidden overflow-y-hidden">
        <header>{renderBanner()}</header>
        <section>
          <InformationSection />
        </section>

        <section>
          <AboutSection />
        </section>
        <section>
          <ServiceSection />
        </section>
        <section>
          <InvestingSection/>
        </section>
        <section>
          <ContactSection/>
        </section>
      </div>
    </div>
  );
};

export default Page;

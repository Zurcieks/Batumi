"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head"; // Importuj komponent Head
import Banner from "../../components/Banner";
import bannerImg from "./../../Images/HeaderImg.jpg";
import AboutSection from "../../pageComponents/HomeComponents/AboutSection";
import BannerMobile from "../../components/BannerMobile";
import InformationSection from "../../pageComponents/HomeComponents/InformationSection";
import ServiceSection from "../../pageComponents/HomeComponents/ServiceSection";

const Page: React.FC = () => {
  const [deviceType, setDeviceType] = useState<
    "mobile" | "tablet" | "desktop"
  >();

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

  const renderMobileBanner = () => (
    <BannerMobile
      isButtonShown={true}
      bannerImage={bannerImg}
      title="Nieruchomości w Batumi"
    />
  );

  const renderTabletBanner = () => (
    <BannerMobile
      isButtonShown={true}
      bannerImage={bannerImg}
      title="Nieruchomości w Batumi"
    />
  );

  const renderDesktopBanner = () => (
    <Banner
      isButtonShown={true}
      bannerImage={bannerImg}
      title="Nieruchomości w Batumi - Desktop!"
    />
  );

  const renderBanner = () => {
    if (deviceType === "mobile") {
      return renderMobileBanner();
    } else if (deviceType === "tablet") {
      return renderTabletBanner();
    } else {
      return renderDesktopBanner();
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
      </div>
    </div>
  );
};

export default Page;

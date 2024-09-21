"use client";
import React, { useEffect, useState } from "react";
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
        setDeviceType("mobile"); // Telefon
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet"); // Tablet
      } else {
        setDeviceType("desktop"); // Komputer
      }
    };

    handleResize(); // Ustaw początkowy typ urządzenia
    window.addEventListener("resize", handleResize); // Nasłuchuj zmian rozmiaru okna

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
      <header>{renderBanner()}</header>
      <section>
        <InformationSection />
      </section>

      <section>
        <AboutSection />
      </section>
      <section>
        <ServiceSection/>
      </section>
    </div>
  );
};

export default Page;

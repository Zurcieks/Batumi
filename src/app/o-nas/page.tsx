import dynamic from 'next/dynamic';
import React from 'react'

 
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
 
import InfoSection from '../../../pageComponents/AboutComponents/InfoSection';
import Hero from '../../../pageComponents/AboutComponents/Hero';
import ContactSection from '../../../pageComponents/HomeComponents/ContactSection';
 
 

export const metadata: Metadata = {
    title: "InvestinGeorgia - O nas",
    description:
      "Dowiedz się o nas więcej!",
    viewport: "width=device-width, initial-scale=1, user-scalable=no",
  };

const page = () => {
  return (
    <div>
        <header>
            <Hero/>
        </header>
        <section>
          <InfoSection/>
        </section>
        <section>
            <ContactSection/>
        </section>
   

    </div>
  )
}

export default page
import dynamic from 'next/dynamic';
import React from 'react'
const Banner = dynamic(() => import("../../../components/Banner"), { ssr: true });
import AboutImage from '../../../Images/AboutImage.jpg'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
 
 

export const metadata: Metadata = {
    title: "Nieruchomości w Batumi - O nas",
    description:
      "Dowiedz się o nas więcej!",
    viewport: "width=device-width, initial-scale=1, user-scalable=no",
  };

const page = () => {
  return (
    <div>
        <header>
            <Banner isButtonShown={false} bannerImage={AboutImage} title="O nas" />
        </header>
   

    </div>
  )
}

export default page
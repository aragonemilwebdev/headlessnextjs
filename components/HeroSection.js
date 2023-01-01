import React from "react";
import Link from 'next/link'
import Image from "next/image";


const HeroSection = (props) => {

  const title = props.HeroSectionData.heroSection.edges[0].node.title;
  const subTitle = props.HeroSectionData.heroSection.edges[0].node.heroSection.subTitle;
  const image = props.HeroSectionData.heroSection.edges[0].node.heroSection.image.sourceUrl;


// console.log('from hero',props.HeroSectionData.heroSection.edges[0].node.heroSection.image.sourceUrl)

  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className=" mb-10">{title}</h1>
      <p className="mb-8 leading-relaxed">{subTitle}</p>
      <div className="flex justify-center">
        <Link href="/contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in touch</Link>
        <Link href="/services" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See our work</Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
         src={image}
         alt="" 
         width={1000}
         height={100}
          />
    </div>
  </div>
</section>
    </>
  );
};

export default HeroSection;

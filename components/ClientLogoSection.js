import React from "react";
import Image from "next/image";

const ClientLogoSection = (props) => {

  const logos = props.ClientLogoData?.clientLogos.edges;

  // console.log("from logo", props.ClientLogoData.clientLogos.edges[0].node.clientLogos.logo.sourceUrl);
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
{logos?.map((logo, index)=>(
          <div key={index} className="p-4 md:w-1/5 sm:w-1/2 w-full">
          <div className=" px-4 py-6">
          <Image
          alt="client-logo"
         href="/" src={logo.node.clientLogos.logo.sourceUrl}
         width={120}
         height={100}
          />
          </div>
        </div>
))}
    </div>
  </div>
</section>
    </>
  );
};

export default ClientLogoSection;

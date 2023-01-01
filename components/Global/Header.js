import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_SITE_LOGO_QUERY } from "../../graphql/siteLogoQuery";



const Header = () => {

  const { data } = useQuery(GET_SITE_LOGO_QUERY);
  
  const siteLogo = data?.siteLogo.sourceUrl;


  // console.log("from header", siteLogo);
  return (
    <>
      <header  className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Image
        alt=""
         href="/" src={siteLogo}
         width={100}
         height={100}
          />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
          </nav>
          <Link href="/contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in touch</Link>
        </div>
      </header>
    </>
  );
};

export default Header;

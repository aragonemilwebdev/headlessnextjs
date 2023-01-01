import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { GET_SITE_LOGO_QUERY } from '../../graphql/siteLogoQuery';

const Footer = () => {

  const { data } = useQuery(GET_SITE_LOGO_QUERY);
  const siteLogo = data?.siteLogo.sourceUrl;

  return (
    <>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <Image
         href="/" src={siteLogo}
         width={100}
         height={100}
          />
      <p className=" mt-7 text-sm text-[#6B708D]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
      <div className="lg:w-1/4 md:w-1/2 w-full px-10">
        <nav className="list-none">
          <li classNameName=' mb-12'>
            <Link href="/team" className="text-[#6B708D] hover:text-gray-800">Team</Link>
          </li>
          <li>
            <Link href="/press" className="text-[#6B708D] hover:text-gray-800">Press</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-10">
        <nav className="list-none">
          <li classNameName=' mb-12'>
            <Link href="/services" className="text-[#6B708D] hover:text-gray-800">Services</Link>
          </li>
          <li>
            <Link href="/projects" className="text-[#6B708D] hover:text-gray-800">Projects</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-10">
        <nav className="list-none">
          <li classNameName=' mb-12'>
            <Link href="/about-us" className="text-[#6B708D] hover:text-gray-800">About Us</Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="text-[#6B708D] hover:text-gray-800">Privacy Policy</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  
</footer>
    </>
  )
}

export default Footer
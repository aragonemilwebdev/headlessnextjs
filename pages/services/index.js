import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_SERVICES_DATA } from '../../graphql/servicesDataQuery'



const ServiceSection = () => {
  const { data } = useQuery(GET_SERVICES_DATA);
  const servicesData = data?.services.edges;

    // console.log('from services',props.ServicesData.services.edges[0].node.title)

    return (
        <>
          <section className="text-gray-600 body-font">
            <div  className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {servicesData?.map((serviceData, index) => (
                  <div key={index} className="p-4 md:w-1/3">
                    <div className="h-full  overflow-hidden">
                      <Image
                  src={serviceData.node.services.image.sourceUrl}
         alt="" 
         width={60}
         height={100}
          />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {serviceData.node.title}
                        </h1>
                        <p className="leading-relaxed mb-3">
                            {serviceData.node.services.subTitle}
                        </p>
                        <div className="flex items-center flex-wrap ">
                        <Link
                        href={`/services/${serviceData.node.slug}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                      </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    };
export default ServiceSection
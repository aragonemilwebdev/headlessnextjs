import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import React from 'react'
import { GET_SERVICE_DATA_BY_SLUG } from '../../graphql/servicesDataQuery'

const ServiceSinglePage = () => {
const router = useRouter()
const {loading, error, data} = useQuery(GET_SERVICE_DATA_BY_SLUG, {
  variables: {
    slug:router.query.slug
  }
})
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;
const title = data.serviceBy?.title;
const subTitle = data.serviceBy?.services.subTitle
const content = data.serviceBy?.services.content;
const image = data.serviceBy?.services.image.sourceUrl;

console.log('service single', data)

  return (
    <div className="  text-[#6B708D] mt-20">
    <h1>{title}</h1>
    <p className="leading-relaxed mb-3"> {subTitle}</p>
    {/* <img className=" w-[100%] h-[444px] pt-10"  src={image} /> */}
    <div className=" my-10">
    {parse(content)}
    </div>

    </div>
  )
}

export default ServiceSinglePage
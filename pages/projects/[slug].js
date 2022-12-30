import Link from "next/link";
import React from "react";
import parse from 'html-react-parser';
import { useQuery } from "@apollo/client";
import { GET_PROJECT_DATA_BY_SLUG } from "../../graphql/projectsDataQuery";
import { useRouter } from "next/router";

const ProjectSinglepage = () => {
  const router =useRouter();
  const { loading, error, data } = useQuery(GET_PROJECT_DATA_BY_SLUG, {
  variables : {
    slug: router.query.slug
  }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const title = data.projectBy?.title;
  const subTitle = data.projectBy?.projects.subTitle
  const content = data.projectBy?.projects.content;
  const image = data.projectBy?.projects.image.sourceUrl;

  // console.log("singlepage", data.projectBy.projects.content);
  return (
    <>
      <div className="  text-[#6B708D] mt-20">
      <h1>{title}</h1>
      <p className="leading-relaxed mb-3"> {subTitle}</p>
      <img className=" w-[100%] h-[444px] pt-10"  src={image} />
      <div className=" my-10">
      {parse(content)}
      </div>

      </div>
    </>
  );
};

export default ProjectSinglepage;

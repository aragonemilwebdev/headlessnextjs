import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_DATA } from "../../graphql/projectsDataQuery";



const ProjectSection = () => {
  
  const {data} = useQuery(GET_PROJECTS_DATA)
  const projectsData = data?.projects.edges;

  return (
    <>
      <section className="text-gray-600 body-font">
        <div  className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {projectsData?.map((projectData, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Image
          src={projectData.node.projects.image.sourceUrl}
         alt="" 
         width={1000}
         height={100}
          />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {projectData.node.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {projectData.node.projects.subTitle}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        href={`/projects/${projectData.node.slug}`}
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

export default ProjectSection;

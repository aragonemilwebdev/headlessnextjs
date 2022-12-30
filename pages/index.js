import { useQuery } from "@apollo/client";
import HeroSection from "../components/HeroSection";
import { GET_HEROSECTION_DATA } from "../graphql/heroSectionQuery";
import { GET_CLIENTLOGOS_DATA } from "../graphql/clientLogosQuery";
import ClientLogoSection from "../components/ClientLogoSection";
import { GET_PROJECTS_DATA } from "../graphql/projectsDataQuery";
import ProjectSection from "../components/ProjectSection";
import { GET_SERVICES_DATA } from "../graphql/servicesDataQuery";
import ServiceSection from "../components/ServiceSection";

const Homepage = () => {
  const { loading, error, data } = useQuery(GET_HEROSECTION_DATA);
  const { data: clientLogo } = useQuery(GET_CLIENTLOGOS_DATA);
  const { data: projectsData } = useQuery(GET_PROJECTS_DATA);
  const { data: servicesData } = useQuery(GET_SERVICES_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  return (
    <>
      <div>
        <div>
          <HeroSection HeroSectionData={data} />
        </div>
        <div>
          <ClientLogoSection ClientLogoData={clientLogo} />
        </div>
        <div>
          <ProjectSection ProjectsData={projectsData} />
        </div>
        <div>
          <ServiceSection ServicesData={servicesData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;

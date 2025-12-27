import PageTitle from "../../components/PageTitle";
import AboutCompany from "./components/AboutCompany";
import FounderSection from "./components/FounderSection";
import IndustriesSection from "./components/IndustriesSection";
import ClientsSection from "./components/ClientsSection";

const page = () => {
  return (
    <div>
      <PageTitle title="About Us" />
      <AboutCompany />
      <FounderSection />
      <IndustriesSection />
      <ClientsSection />
    </div>
  );
};

export default page;

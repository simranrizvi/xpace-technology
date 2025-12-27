import React from "react";
import PageTitle from "../../components/PageTitle";
import CareerContent from "./components/CareerContent";
import CareerOpportunities from "./components/CareerOpportunities";

const page = () => {
  return (
    <div>
      <PageTitle title="Career" />
      <CareerContent />
      <CareerOpportunities />
    </div>
  );
};

export default page;

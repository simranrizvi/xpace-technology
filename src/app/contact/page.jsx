import React from "react";
import PageTitle from "../../components/PageTitle";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";

const page = () => {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <ContactSection />
      <MapSection />
    </div>
  );
};

export default page;

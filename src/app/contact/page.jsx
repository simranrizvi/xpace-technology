import React from "react";
import PageTitle from "../../components/PageTitle";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";

export default function Page() {
  return (
    <>
      <PageTitle title="Contact Us" />
      <ContactSection />
      <MapSection />
    </>
  );
}

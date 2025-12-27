import React from "react";
import PageTitle from "../../components/PageTitle";
import AppointmentForm from "./components/AppointmentForm";

const page = () => {
  return (
    <div>
      <PageTitle title="Appointment" />
      <AppointmentForm />
    </div>
  );
};

export default page;

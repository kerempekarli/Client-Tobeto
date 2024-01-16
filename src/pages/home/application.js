import React from "react";
import ApplicationCard from "../../components/applicationCard"; // ApplicationCard bileşeninin bulunduğu dosyanın yolunu belirtin

const ApplicationPage = () => {
  const applications = [
    {
      formName: "İstanbul Kodluyor",
      formStatus: "Accepted",
      formDates: ["İstanbul Kodluyor Başvuru Formu onaylandı.", "İstanbul Kodluyor Belge Yükleme Formu onaylandı."],
    },
    // Diğer başvurular
  ];

  return (
    <div className="row">
      {applications.map((application, index) => (
        <ApplicationCard key={index} {...application} />
      ))}
    </div>
  );
};

export default ApplicationPage;

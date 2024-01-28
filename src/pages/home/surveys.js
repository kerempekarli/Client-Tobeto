// SurveysPage.jsx

import React from "react";
import SurveyCard from "../../components/surveyCard";

const SurveysPage = () => {
  const surveys = [
    {
      surveyTitle: "Anket Başlığı 1",
      surveyDate: "01.02.2024",
      surveyLink: "https://anketlinki1.com",
    },
    {
      surveyTitle: "Anket Başlığı 2",
      surveyDate: "05.02.2024",
      surveyLink: "https://anketlinki2.com",
    },
    // Diğer anketler
  ];

  return (
    <div className="row">
      {surveys.map((survey, index) => (
        <SurveyCard key={index} {...survey} />
      ))}
    </div>
  );
};

export default SurveysPage;

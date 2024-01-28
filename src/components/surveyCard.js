// SurveyCard.jsx

import React from "react";
import { Card, Button } from "react-bootstrap";

const SurveyCard = ({ surveyTitle, surveyDate, surveyLink }) => {
  return (
    <div className="col-md-4 col-12 my-4">
      <Card className="notfy-card news">
        <Card.Body>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between mb-4">
              <span className="type">Anket</span>
              <span className="corp-names type">İstanbul Kodluyor</span>
            </div>
            <span className="header">{surveyTitle}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="date">{surveyDate}</span>
            <a href={surveyLink} target="_blank" rel="noopener noreferrer" className="read-more">
              Anketi Doldur
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SurveyCard;

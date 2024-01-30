import React, { useState, useEffect } from "react";
import axios from "../services/axiosHelper";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SurveyForm = () => {
  const { id } = useParams();
  const [surveyData, setSurveyData] = useState(null);
  const [answers, setAnswers] = useState({});
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const response = await axios.get(`/Surveys/surveys/${id}`);

        if (response.status === 200) {
          setSurveyData(response.data);

          // Her bir soru için boş bir cevap nesnesi oluştur
          const initialAnswers = {};
          response.data.surveyQuestions.forEach((question) => {
            initialAnswers[question.questionId] = "";
          });
          setAnswers(initialAnswers);
        } else {
          // Hata durumunda istediğiniz işlemleri yapabilirsiniz
        }
      } catch (error) {
        // Hata durumunda istediğiniz işlemleri yapabilirsiniz
        console.error("An error occurred while fetching survey details:", error);
      }
    };

    fetchSurveyData();
  }, [id]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Cevapları uygun formatta düzenle
      const formattedAnswers = Object.keys(answers).map((questionId) => ({
        UserID: userId,
        SurveyID: parseInt(id),
        QuestionID: parseInt(questionId),
        AnswerValue: answers[questionId],
      }));


      console.log("formattedAnswers ", formattedAnswers);
  
      const response = await axios.post(`/Surveys/SubmitAnswers/${id}`, formattedAnswers);
  
      if (response.status === 200) {
        // Başarıyla gönderildiğinde istediğiniz işlemleri yapabilirsiniz
        console.log("Cevaplar başarıyla gönderildi.");
      } else {
        // Hata durumunda istediğiniz işlemleri yapabilirsiniz
        console.error("Cevapları gönderirken bir hata oluştu.");
      }
    } catch (error) {
      // Hata durumunda istediğiniz işlemleri yapabilirsiniz
      console.error("An error occurred while submitting survey answers:", error);
    }
  };

  if (!surveyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{surveyData.title}</h2>
      <p>{surveyData.description}</p>

      <form onSubmit={handleSubmit}>
        {surveyData.surveyQuestions.map((question) => (
          <div key={question.questionId}>
            <label>{question.questionText}</label>
            <input
              type="text"
              value={answers[question.questionId]}
              onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Cevapları Gönder</button>
      </form>
    </div>
  );
};

export default SurveyForm;

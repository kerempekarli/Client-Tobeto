import React, { useState, useEffect } from 'react';
import axios from '../../services/axiosHelper';
import { Modal, Button, Form } from 'react-bootstrap';

const SurveyList = () => {
  const [unsentSurveys, setUnsentSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const userId = '962d19bf-53bb-4c82-067b-08dc1ffdd664'; // Örnek bir userId

  useEffect(() => {
    const fetchUnsentSurveys = async () => {
      try {
        const response = await axios.get(`/Survey/GetUnsentSurveys/${userId}`);
        setUnsentSurveys(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUnsentSurveys();
  }, [userId]);

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedSurvey(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Ankete cevapları gönderme işlemini burada gerçekleştirin
    // ...
    // Ardından modal'ı kapatın
    handleModalClose();
  };

  return (
    <div className="survey-list-container text-center">
    <h1>Unsent Surveys</h1>
    <ul className="survey-list">
      {unsentSurveys.map((survey) => (
        <li key={survey.id} onClick={() => handleSurveyClick(survey)}>
          <p>Title: {survey.title}</p>
          <p>Description: {survey.description}</p>
        </li>
      ))}
    </ul>

    <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{selectedSurvey?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Question 1</Form.Label>
            <Form.Control type="text" placeholder="Answer" />
          </Form.Group>
          {/* Add similar structures for other questions */}
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  </div>
  );
};

export default SurveyList;

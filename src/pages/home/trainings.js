import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout from "../../layouts/HeaderLogicLayout";

const Training = () => {
  const trainingData = [
    {
      id: 1,
      title: "Eğitim Başlığı 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Eğitim Başlığı 2",
      image: "https://via.placeholder.com/150",
    },
    // Diğer eğitimler...
  ];

  return (
      <div className="container mt-4">
        <div className="row">
          {trainingData.map((training) => (
            <div key={training.id} className="col-md-2 mb-4">
              <Card>
                <Card.Img variant="top" src={training.image} />
                <Card.Body>
                  <Card.Title>{training.title}</Card.Title>
                  <Button size="md" variant="primary">Detayları Gör</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Training;

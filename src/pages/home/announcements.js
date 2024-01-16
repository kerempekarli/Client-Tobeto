import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Announcements = () => {
  const announcementsData = [
    {
      id: 1,
      title: "Önemli Duyuru 1",
      image: "https://via.placeholder.com/300",
      description: "Bu duyuru önemlidir. Detaylı açıklama burada yer alacaktır.",
    },
    {
      id: 2,
      title: "Yeni Haber 2",
      image: "https://via.placeholder.com/300",
      description: "Yeni haberimiz yayınlandı. Detaylı açıklama burada yer alacaktır.",
    },
    // Diğer duyurular ve haberler...
  ];

  return ( announcementsData.count > 0 ? <div>"sadgsdag</div> :
      <div className="container mt-4">
        <div className="row">
          {announcementsData.map((announcement) => (
            <div key={announcement.id} className="col-md-2 mb-4">
              <Card>
                <Card.Img variant="top" src={announcement.image} />
                <Card.Body>
                  <Card.Title>{announcement.title}</Card.Title>
                  <Card.Text>{announcement.description}</Card.Text>
                  <Button variant="primary">Detayları Gör</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Announcements;

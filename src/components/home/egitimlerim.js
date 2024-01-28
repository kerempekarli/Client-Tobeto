import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../store/actions/courseAction";
import { Container, Row, Col, Card } from "react-bootstrap";

const Egitimlerim = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses.items);
  const loading = useSelector((state) => state.courses.loading);

  useEffect(() => {
    // Eğitim listesini almak için action'u çağır
    dispatch(getCourses(0, 10)); // Örnek olarak ilk sayfa, sayfa başına 10 öğe
    
  }, [dispatch]);



  return (
    <Container>
      <h1 className="mt-4">Eğitimlerim</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {courses && courses.map((course) => (
            <Col key={course.id} lg={4} md={6} sm={12} className="mb-4">
              <Card>
                {/* <Card.Img variant="top" src={course.imagePath} alt={course.name} /> */}
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.price}</Card.Text>
                  {/* Ek bilgileri buraya ekleyebilirsiniz */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Egitimlerim;

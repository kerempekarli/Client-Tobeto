
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../services/axiosHelper';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imagePath: '',
    password: '',
    nationalIdentity: '',
    birthDate: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/Users/Add', formData);
      console.log('User registered successfully:', response.data);
      // Burada isteğe bağlı olarak başarılı kayıt durumuyla ilgili bir işlem yapabilirsiniz.

      const loginResponse = await axios.post('/Auth/Login', {
        email: formData.email,
        password: formData.password
      });

      console.log('User logged in successfully:', loginResponse.data);
      navigate("/home")


    } catch (error) {
      console.error('Error registering user:', error.response.data);
      // Burada isteğe bağlı olarak kayıt hatası durumuyla ilgili bir işlem yapabilirsiniz.
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>National Identity:</Form.Label>
          <Form.Control
            type="text"
            name="nationalIdentity"
            value={formData.nationalIdentity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birth Date:</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        {/* Diğer alanları ekleyin */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;

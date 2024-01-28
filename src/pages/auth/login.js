import React, { useState,  } from "react";
import { useDispatch,  } from "react-redux";
import { loginUser,  } from "../../store/actions/authActions";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../../layouts/HeaderLogicLayout";


export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleLogin = () => {
    // Formdan gelen bilgilerle loginUser action'ını tetikle
    dispatch(loginUser({ email, password }));
  };


  return (
    <Layout showHeader={false}>
    <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="p-4 border rounded shadow">
          <h2 className="text-center mb-4">Login</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={handleLogin}
            className="w-100"
          >
            Login
          </Button>
        </Form>
      </div>
    </Layout>
  );
}

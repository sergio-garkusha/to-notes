import React, { useState } from "react";
import { login as goLogin, register } from "../api/authAPI";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const registrationResponse = await register(username, password);
      if (registrationResponse.status === 201) {
        const { token } = await goLogin(username, password);
        if (token) {
          login(token);
          navigate("/");
          alert("Registered successfully!");
        }
      }
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
      <p>
        Or <NavLink to="/login">login</NavLink>
      </p>
    </Form>
  );
};

export default Register;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

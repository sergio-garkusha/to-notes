import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "@emotion/styled";

import { login as goLogin } from "../api/authAPI";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await goLogin(username, password);
      if (token) {
        login(token);
        navigate("/");
        alert("Login successful!");
      }
    } catch (error) {
      alert("Login failed");
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
      <button type="submit">Login</button>
      <p>
        New user? <NavLink to="/register">Register</NavLink>
      </p>
    </Form>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

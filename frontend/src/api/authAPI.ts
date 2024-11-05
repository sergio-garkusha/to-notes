// import { z } from "zod";
import axios from "axios";
import { setJWT } from "./utils";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const authUrl = import.meta.env.VITE_API_AUTH_URL || "/api/auth";
const API_URL = baseUrl + authUrl;

interface AuthResponse {
  token: string;
}

export const register = async (username: string, password: string) => {
  return axios.post(`${API_URL}/register`, { username, password });
};

export const login = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, { username, password });
  console.log(response.data);
  if (response.data.token) setJWT(response.data.token);
  return response.data;
};

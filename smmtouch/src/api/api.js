import axios from "axios";

export const apiLink = axios.create({
  baseURL: "http://localhost:4000",
});

export const addData = async (login, email, password, repeatPassword) => {
  return await apiLink.post(
    "/register",
    login,
    email,
    password,
    repeatPassword
  );
};

export const getData = async () => {
  const response = await apiLink.get("/register");
  return response.data;
};

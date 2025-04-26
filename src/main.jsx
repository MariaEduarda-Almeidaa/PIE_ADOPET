import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RegisterPage from "../src/Pages/Register/RegisterPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import backgroundImage from './assets/Background/Background.jpg';

document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed'; // deixa o fundo fixo!

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "Register", element: <RegisterPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

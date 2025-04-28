import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import backgroundImage from './assets/Background/Background.jpg';


document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />  {}
  </StrictMode>
);
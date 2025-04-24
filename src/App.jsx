import React from "react";
import Navbar from "./Components/Navbar//Navbar";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/RegisterPage";

const App = () => {
  return (
    <>
      <Navbar />;
      <Login />;
      <Register />;
    </>
  );
};

export default App;

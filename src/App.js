import React from "react";
import "./app.scss";
import Homepage from "./pages/homePage/homepage.page";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/loginPage.page";
function App() {
  const user = null;
  return (
    <div className="App">
      <Routes>
        {user ? (
          <Route path="/" exact element={<Homepage />} />
        ) : (
          <Route path="/" exact element={<Login />} />
        )}{" "}
      </Routes>
    </div>
  );
}

export default App;

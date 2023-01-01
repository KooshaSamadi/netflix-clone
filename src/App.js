import React, { useEffect } from "react";
import "./app.scss";
import Homepage from "./pages/homePage/homepage.page";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/loginPage.page";
import { auth } from "./utils/firebase";
function App() {
  const user = null;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log(user);
      } else {
        // No user is signed in
        console.log("No user is signed in");
      }
    });
  }, []);
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

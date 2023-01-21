import React, { useEffect, useState } from "react";
import "./app.scss";
import Homepage from "./pages/homePage/homepage.page";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/loginPage.page";
import { auth } from "./utils/firebase";
import Profile from "./pages/profile/profile.page.jsx";
import { MoviePage } from "./pages/moviePage/moviePage.page";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const authChange = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in

        setCurrentUser({ email: user.email, uid: user.uid });
        console.log(currentUser);
        // setLoading(false);
      } else {
        // No user is signed in
        console.log("No user is signed in");
        setCurrentUser(null);
      }
    });
    return () => {
      authChange();
    };
  }, []);
  // if (loading) {
  //   return <div style={{ color: "white", fontSize: "22px" }}>Loading...</div>;
  // }
  return (
    <div className="App">
      <Routes>
        {currentUser ? (
          <>
            <Route path="/" exact element={<Homepage />} />
            <Route
              path="/profile"
              element={<Profile currentUser={currentUser} />}
            />
            <Route path="/movie/:movieId" element={<MoviePage />} />
          </>
        ) : (
          <Route path="/" exact element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;

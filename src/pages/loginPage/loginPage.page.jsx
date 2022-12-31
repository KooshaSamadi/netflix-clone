import SignIn from "../../components/signIn/signIn.component";
import "./loginPage.styles.scss";
import React, { useState } from "react";

function LoginPage() {
  const [signIn, setSignIn] = useState(true);

  return (
    <section className="loginpage">
      <div className="loginpage_nav">
        <img
          className="loginpage_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        {!signIn && (
          <button className="loginpage_button" onClick={() => setSignIn(true)}>
            Sign In
          </button>
        )}
      </div>
      <div className="loginpage_body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginpage_body_input">
              <form>
                <input
                  className="loginpage_body_input_email"
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Email Address"
                  autocomplete="off"
                />
                <input
                  className="loginpage_body_input_getStarted"
                  value="GET STARTED >"
                  type="submit"
                  onClick={() => setSignIn(true)}
                />
              </form>
            </div>
          </>
        )}
      </div>
      <div className="loginpage_gradient"></div>
    </section>
  );
}

export default LoginPage;

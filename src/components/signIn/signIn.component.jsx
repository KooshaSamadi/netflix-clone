import React from "react";
import "./signIn.styles.scss";
function SignIn() {
  const signInHandler = (e) => {
    e.preventDefault();
  };
  const signUpHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="signIn">
      <form>
        <h1 className="signIn-header">Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signInHandler}>
          Sign In
        </button>
        <h4>
          New to Netflix? <span onClick={signUpHandler}>Sign up now.</span>
        </h4>
      </form>
    </section>
  );
}

export default SignIn;

import React, { useRef, useState } from "react";
import "./signIn.styles.scss";
import { register, login, logout } from "../../utils/firebase";
import Alert from "../alert/alert.component";

function SignIn() {
  // useState is used to detemine the response from the database
  const [response, setResponse] = useState();
  // useRef is used to get the value of the input field
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // signUpHandler and signInHandler are used to handle the form submission
  const signUpHandler = (e) => {
    e.preventDefault();
    setResponse(null);
    register(emailRef.current.value, passwordRef.current.value, setResponse);
  };
  const signInHandler = (e) => {
    e.preventDefault();
    setResponse(null);
    login(emailRef.current.value, passwordRef.current.value, setResponse);
  };

  return (
    <section className="signIn">
      {response && <Alert response={response} />}
      <form>
        <h1 className="signIn-header">Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
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

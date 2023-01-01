import React, { useRef, useState } from "react";
import "./signIn.styles.scss";
import { register, login } from "../../utils/firebase";
import Alert from "../alert/alert.component";
function SignIn() {
  // useState is used to detemine the response from the database
  const [response, setResponse] = useState();
  // useRef is used to get the value of the input field
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUpHandler = (e) => {
    setResponse(null);
    e.preventDefault();
    register(emailRef.current.value, passwordRef.current.value, setResponse);
  };
  const signInHandler = (e) => {
    setResponse(null);
    e.preventDefault();
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

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0N31GeNfJl_NktI0ECUu_QgbT1HT5XR8",
  authDomain: "netflix-clone-40920.firebaseapp.com",
  projectId: "netflix-clone-40920",
  storageBucket: "netflix-clone-40920.appspot.com",
  messagingSenderId: "15443433113",
  appId: "1:15443433113:web:a637d5d72ecf3e4b5f8a08",
};
const firebaseApp = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);

const register = (email, password, setResponse) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setResponse("User created successfully");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setResponse(errorMessage);
    });
};

const login = (email, password, setResponse) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setResponse("User logged in successfully");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setResponse(errorMessage);
    });
};
const logout = () => {
  auth.signOut();
};

export { register, login, auth, logout };

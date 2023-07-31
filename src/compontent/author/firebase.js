import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXhJiqf69sqg5D7553-lb9Te82y0TYaEs",
  authDomain: "worklistauth.firebaseapp.com",
  projectId: "worklistauth",
  storageBucket: "worklistauth.appspot.com",
  messagingSenderId: "138114008722",
  appId: "1:138114008722:web:0b21ee45ad3b4ab246c84b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const sigInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('profilePic', profilePic)
  })
    .catch((error) => {
      console.log(error);
  });
};


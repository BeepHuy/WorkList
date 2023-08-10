import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyBXhJiqf69sqg5D7553-lb9Te82y0TYaEs",
  authDomain: "worklistauth.firebaseapp.com",
  projectId: "worklistauth",
  storageBucket: "worklistauth.appspot.com",
  messagingSenderId: "138114008722",
  appId: "1:138114008722:web:0b21ee45ad3b4ab246c84b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export const sigInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const userId = result.user.uid;

      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('profilePic', profilePic)
      localStorage.setItem('userId', userId)

      window.location.replace('/')
  })
    .catch((error) => {
      console.log(error);
  });
};

export const handleSignOut = async () => {
  await signOut(auth);
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('profilePic');
  localStorage.removeItem('userId');

  window.location.replace('/login')
}

export {db}


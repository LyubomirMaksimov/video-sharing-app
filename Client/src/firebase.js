import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIKYrSOA6_VZpEKkz_JeBh-X1dOAdhBig",
  authDomain: "video-sharing-app-2abe8.firebaseapp.com",
  projectId: "video-sharing-app-2abe8",
  storageBucket: "video-sharing-app-2abe8.appspot.com",
  messagingSenderId: "171978045754",
  appId: "1:171978045754:web:e779f779ed1deaea73b803",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;

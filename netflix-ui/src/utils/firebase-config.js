import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb-z4tOex_2GdQCRXbid-gcQOGtjcffgA",
  authDomain: "zoom-clone-df636.firebaseapp.com",
  projectId: "zoom-clone-df636",
  storageBucket: "zoom-clone-df636.appspot.com",
  messagingSenderId: "872461810173",
  appId: "1:872461810173:web:5979a7b7206cd4de590194"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

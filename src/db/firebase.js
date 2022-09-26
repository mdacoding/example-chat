import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFsC19_Y9EON_IvogI2SESDQl3wgWPLI0",
  authDomain: "example-chat-d0008.firebaseapp.com",
  projectId: "example-chat-d0008",
  storageBucket: "example-chat-d0008.appspot.com",
  messagingSenderId: "1068274439250",
  appId: "1:1068274439250:web:a90df3b6bcaeabc54fbb8b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

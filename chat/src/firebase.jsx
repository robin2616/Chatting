import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAq63fpvldenGhiuTfDhYO-P64qlyQQi5k",
    authDomain: "chatting-2723d.firebaseapp.com",
    projectId: "chatting-2723d",
    storageBucket: "chatting-2723d.appspot.com",
    messagingSenderId: "740419595855",
    appId: "1:740419595855:web:d2c915b1dfcf2aeb0e843a",
    measurementId: "G-EVT0Q1PQ88"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const analytics = getAnalytics(app);
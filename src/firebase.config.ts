// src/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// src/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp} from '@angular/fire/app';


// Your Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB2NPqGDcLtbwt_RikLlxQwRdCzOMAYnOo",
  authDomain: "zainab-portfolio-e5409.firebaseapp.com",
  projectId: "zainab-portfolio-e5409",
  storageBucket: "zainab-portfolio-e5409.firebasestorage.app",
  messagingSenderId: "613662394969",
  appId: "1:613662394969:web:44a546e80a93439ddb7f48"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

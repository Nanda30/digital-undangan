"use client"; // Pastikan ini berjalan hanya di client-side

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDahd7gAVfqsq-Kz_Uax_DW1G4NvmpCezQ",
  authDomain: "undangan-online-9f034.firebaseapp.com",
  projectId: "undangan-online-9f034",
  storageBucket: "undangan-online-9f034.firebasestorage.app",
  messagingSenderId: "686398473351",
  appId: "1:686398473351:web:e055921edfeebedf9c6422",
  measurementId: "G-50R1RTQHPV",
};

// Inisialisasi Firebase hanya jika belum ada instance yang dibuat
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Pastikan Firestore mendapatkan instance `app`
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, db, analytics };

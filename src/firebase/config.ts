// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyADLVdINkRHF4yhdkpz_o3STPxIHWcNm_Y",
   authDomain: "homepage-b5963.firebaseapp.com",
   projectId: "homepage-b5963",
   storageBucket: "homepage-b5963.appspot.com",
   messagingSenderId: "913271692654",
   appId: "1:913271692654:web:26815fdd71919025b5357f",
   measurementId: "G-ZQ0N2FZWYP",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


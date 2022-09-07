// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMRhSKH8vf4RGA5lYo_JvuqHvG2sdjfI",
  authDomain: "ravenflix-34342.firebaseapp.com",
  projectId: "ravenflix-34342",
  storageBucket: "ravenflix-34342.appspot.com",
  messagingSenderId: "1047259082650",
  appId: "1:1047259082650:web:ed58e150b9e0af49ef9423"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
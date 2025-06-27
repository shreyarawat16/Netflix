
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCKFTWCwgycuGp7wVqDyDJRBAnqvODSBoQ",
  authDomain: "netflix-clone-3b905.firebaseapp.com",
  projectId: "netflix-clone-3b905",
  storageBucket: "netflix-clone-3b905.firebasestorage.app",
  messagingSenderId: "698840372729",
  appId: "1:698840372729:web:df9fc586374ade6c465928",
  measurementId: "G-S9HMJ38S8L"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
 
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user= res.user;
        
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
         
       
    } catch (error) {
        console.log("Signup error", error.message);
        toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}

const login = async(email, password)=>{
 try {
     await signInWithEmailAndPassword(auth, email, password);
      
 } catch (error) {
    console.log("login error");
   toast.error(error.code.split('/')[1].split('-').join(" "));
 }
}

const logout = () => signOut(auth);

export {auth, db, login, signup, logout};
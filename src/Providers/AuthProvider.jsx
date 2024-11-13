import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { auth } from '../firebase.init';
import { useState } from 'react';
export const AuthContext = createContext(null);

const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 //state decalared for stopping navigate to login page;
const [loading,setLoading]=useState(true);  
   const [user,setUser]=useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
       
    }
    const signInWithGoogle=()=>{
       return signInWithPopup(auth,googleProvider) ;
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,user=>{
            setUser(user)
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    // onAuthStateChanged(auth, (user)=>{
    //     if(user){
    //         console.log('currently logged In', user)
    //         setUser(user);
    //     }
    //     else{
    //         console.log("Not Logged In ")
    //         setUser(null)
    //     }
    // })
    const name = "zohir";
    const authInfo = {
        name,
        createUser,
        signIn,
        user,
        signOutUser,
        loading,
        signInWithGoogle,
    }
    return (

        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;
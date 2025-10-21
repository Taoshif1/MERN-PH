import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';

// Step 1 - Create a context
export const AuthContext = createContext();

// Auth from firebase to handle login logout
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// AuthProvider er peter vitore RouterProvider in main.jsx tai ekhane {children} diye destructure kore nisi
const AuthProvider = ({children}) => {

    // State for our user
    const [user, setUser] = useState(null);

    // func to signup/create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //login function
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // func to sign out/log out user
    const logOut = () => {
        return signOut(auth);
    };

    // observer
    useEffect(()=>{
        //sets users data
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    // Displayed via <AuthContext /> prop (value={authData})
    const authData = {
        user:user,  // same as writing "user" only like the below one
        setUser,  // setUser:setUser (same)
        createUser,
        logOut,
        signIn
    }

    return (
        <>
            <AuthContext value={authData}>{children}</AuthContext>

        </>
    );
};

export default AuthProvider;
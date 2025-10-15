import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //get current user info (observer)
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log(" Current user inside if auth provider observer -> ", currentUser);
        }else{
            console.log(" Inside else observer ,", currentUser);
        }

    })

    const authInfo = {
        createUser,
        signInUser,
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
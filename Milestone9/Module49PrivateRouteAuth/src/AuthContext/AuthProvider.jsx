import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //get current user info (observer)
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log(" Current user inside if auth provider observer -> ", currentUser);
            setUser(currentUser);
        }else{
            console.log(" Inside else observer ,", currentUser);
        }
    })

    const signOutUser = () => {
        return signOut(auth);
    }
    

        // step 1 - observer set
        // step 2 - set in a variable
        // step 3 - return & call the variable so that you can clear the ref
    useEffect(() => {
        // set the observer/mount
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(" Current user in auth change -> ", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        // step 4 - clear the observer on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
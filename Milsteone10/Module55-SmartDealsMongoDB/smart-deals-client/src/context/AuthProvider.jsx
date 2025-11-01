import React from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'
import { useState } from 'react'

const AuthProvider = ({children}) => {
    const[user, setUser] =useState(null);
    const[loading, setLoading] =useState(true);


    const createUser = (email, password) =>{

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser,
        signInUser,
        user, 
        loading


    }

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider
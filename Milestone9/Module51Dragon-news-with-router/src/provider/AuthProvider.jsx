import React, { createContext, useState } from 'react';

// Step 1 - Create a context
export const AuthContext = createContext();


// AuthProvider er peter vitore RouterProvider in main.jsx tai ekhane {children} diye destructure kore nisi
const AuthProvider = ({children}) => {

    // State for our user
    const [user, setUser] = useState({
        name: "Taoshif Gazi",
        email: "taoshif2@gmail.com",
    })

    // Displayed via <AuthContext /> prop (value={authData})
    const authData = {
        user:user,  // same as writing "user" only like the below one
        setUser,  // setUser:setUser (same)
    }

    return (
        <>
            <AuthContext value={authData}>{children}</AuthContext>

        </>
    );
};

export default AuthProvider;
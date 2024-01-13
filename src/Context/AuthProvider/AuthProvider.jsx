import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


// creat Context
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    // user State
    const [user, setUser] = useState(null)
    console.log("State User Info Heare", user);
    // loading state
    const [loading, setLoading] = useState(true)

    // update user Profile
    const updateUserProfile = (Profile) => {
        return updateProfile(auth.currentUser, Profile)
    }
    // send Email verification
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    // call firbase for obsarve user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user insdie state change', currentUser);
            if(currentUser == null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // TODO Google Provider Area
    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    // todo Random user creat area & re authentication
    // creat User
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const logInWithIdPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }









    // TODO Facebook Provider Area
    // TODO Github Provider Area
    // TODO Twitter Provider Area

    const authInfo = {
        googleSignIn,
        user,
        logOut,
        creatUser,
        logInWithIdPass,
        loading,
        updateUserProfile,
        verifyEmail,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
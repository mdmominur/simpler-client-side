
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //Sign in with google
    const handleGoogleSignIn = (location, history) =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            axios.put('https://stark-plateau-07559.herokuapp.com/user', {email: result.user.email, displayName: result.user.displayName})
            .then();
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            console.log(error.message);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    } 

    //Sign up with email password

    const handleSignUpEmailPassword = (userinfo, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, userinfo.email, userinfo.password)
        .then((userCredential) => {
          
            setUser({displayName:userinfo.name, email:userinfo.email});
            updateProfile(auth.currentUser, {
                displayName: userinfo.name
              }).then(() => {
                axios.post('https://stark-plateau-07559.herokuapp.com/user', {email:userinfo.email, displayName: userinfo.name})
                .then();
               history.replace('/');
              }).catch((error) => {
                // An error occurred
                // ...
              });
            // ...
        })
        .catch((error) => {
            setError(error.message);
            
        })
        .finally(() => setIsLoading(false));
    }

    //Sign in with Email password
    const handleEmailLogin = (loginInfo, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    //Logout
    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
          
    }


    useEffect(() => {
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
          });

          return () => unsubscribed;
    }, [auth]);


    return {
        user,
        handleSignUpEmailPassword,
        handleGoogleSignIn,
        handleEmailLogin,
        error,
        setError,
        isLoading,
        handleLogout
    };
}


export default useFirebase;
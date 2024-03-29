
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    //Sign in with google
    const handleGoogleSignIn = (location, history) =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            axios.put('https://simpler-api.mominur.net/user', {email: result.user.email, displayName: result.user.displayName})
            .then();
            const destination = location?.state?.from || '/dashboard';
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
                axios.post('https://simpler-api.mominur.net/user', {email:userinfo.email, displayName: userinfo.name})
                .then();
               history.replace('/dashboard');
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
            const destination = location?.state?.from || '/dashboard';
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


    //objerve user
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


    //Check admin
    useEffect(()=>{
        axios.get(`https://simpler-api.mominur.net/user/${user.email}`)
        .then(res => setAdmin(res.data));
    }, [user.email]);
    return {
        user,
        handleSignUpEmailPassword,
        handleGoogleSignIn,
        handleEmailLogin,
        error,
        admin,
        setError,
        isLoading,
        handleLogout
    };
}


export default useFirebase;
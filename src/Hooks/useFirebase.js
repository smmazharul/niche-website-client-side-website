import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,getIdToken
} from "firebase/auth";

//initializeFirebase app
initializeFirebase();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding]=useState(true)
    const [authError, setAuthError] = useState(' ')
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState(' ');


    const registerUser = (email, password,name,history) => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError(' ');
            const newUser = { email, displayName: name };
            setUser(newUser)
            // save user to the data base
            savedUser(email,name)
            // send to displayName to firebase after create the user ID
            updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
              }).catch((error) => {
              });
            
        
            history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
            
          })
            .finally(()=>setIsLoding(false));
        
    }


    const loginUser = (email, password,location,history) => {
        setIsLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
            setAuthError(' ');
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(()=>setIsLoding(false));
    }
//observer user state
    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        // console.log(idToken);
                        setToken(idToken)
                })

              
            } else {
              setUser({})
            }
            setIsLoding(false)
        });
        return () => unsubscribe;
    },[])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])





    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoding(false));
    }


    const savedUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        token,
        isLoding,
        authError,
        user,
        admin,
        registerUser,
        logOut,
        loginUser,
        
    }
}
export default useFirebase;
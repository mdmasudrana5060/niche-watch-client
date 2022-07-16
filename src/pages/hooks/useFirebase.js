import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"

import initializeFirebase from "../Login/Firebase/firebase.init";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                const newUser = { email: email, displayName: name };
                setUser(newUser);

                saveUser(email, name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {


                }).catch((error) => {

                });
                history.replace('/')
                setAuthError('');
            })
            .catch((error) => {


                setAuthError(error.message);
                console.log(error.message, "register firebase");

            })
            .finally(() => setIsLoading(false));


    }
    const logInUser = (email, password, location, history) => {

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError("error.message register login  ", error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // sign in with google

    // const signInWithGoogle = () => {
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             // This gives you a Google Access Token. You can use it to access the Google API.

    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log('i am from useFirebase');

    //             // const destination = location?.state?.from || '/';
    //             // history.replace(destination);
    //             setAuthError('');
    //             saveUser(user.email, user.displayName, "PUT")

    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             // const errorCode = error.code;
    //             // const errorMessage = error.message;
    //             // // The email of the user's account used.
    //             // // const email = error.customData.email;
    //             // // The AuthCredential type that was used.
    //             // const credential = GoogleAuthProvider.credentialFromError(error);
    //             setAuthError(error.message);
    //             // ...
    //         })
    //         .finally(() => setIsLoading(false));

    // }

    // observe user presence
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [])
    // admin setup
    useEffect(() => {
        fetch(`https://joli-livre-90273.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch(`https://joli-livre-90273.herokuapp.com/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user),
        })


    }
    return {

        user,
        admin,
        registerUser,
        logOut,
        logInUser,
        signInWithGoogle,
        isLoading,
        authError
    }

}
export default useFirebase;
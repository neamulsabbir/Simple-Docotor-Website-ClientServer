import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile 
} from "firebase/auth";
import app from "../FirebaseConfig/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('')
  const [loading,setLoading] = useState(true)
  const [user,setUser] = useState(null)

  const provider = new GoogleAuthProvider()

  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

        //*--------signUP START-------*//
  const signUp = (email, password, userInfo) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (result) {
          const confirm = window.confirm(
            "Account Create Completed. Please Log in"
          );
          if (confirm) {
            navigate("/login");
          }
        }
        
          updateProfile(auth.currentuser,userInfo)
          .then((result) => {
           console.log(result)
          }).catch((error) => {
            
          });
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  };
        //*--------signUP ENd-------*//


        //*--------signIn START-------*//
  const signIn = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (result) {
          toast.success("Login Successfully");
        }
        navigate(from, {replace:true})
        setLoginError('')
      })
      .catch((error) => {
        setLoginError('Email or Password not Match')
        
      });
  };
        //*--------signIn ENd-------*//


        //*--------signIn With GOOGLE Start-------*//

const signInWithGoogle = () => {
  setLoading(true)
  signInWithPopup(auth, provider)
  .then((result) => {
    navigate(from, {replace:true})
  }).catch((error) => {
    
  });
}
        //*--------signIn With GOOGLE End-------*//



        //*--------signOut Start-------*//
  const logOut = () => {
    setLoading(true)
    signOut(auth)
    .then(() => {
      
    }).catch((error) => {
      
    });
  }
        //*--------signOut End-------*//


        //*--------user Start-------*//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => unsubscribe();
  },[]) 
        //*--------user END-------*//



  const authInfo = { signUp, signIn,signInWithGoogle,logOut,loginError,user ,loading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

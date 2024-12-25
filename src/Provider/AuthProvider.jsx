import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  // user Register method
  const userRegister = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Login method
  const userLogin = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userGoogleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  const userLogout = () => {
    setLoading(false);
    return signOut(auth);
  };

  const UpdateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser?.email)
      {
        const user = {email: currentUser.email}
        axios
          .post("http://localhost:4002/jwt", user, {withCredentials: true})
          .then((res) => console.log(res.data));
          setLoading(false)
      }else{
        axios.post('http://localhost:4002/logout', {}, {withCredentials: true})
        .then(res => {console.log(res.data)})
      }
      setLoading(false);
      
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    userRegister,
    userLogin,
    user,
    userLogout,
    userGoogleLogin,
    UpdateUserProfile,
    loading,
    setEmail,
    email,
  };
  return <AuthContext.Provider value={userInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;

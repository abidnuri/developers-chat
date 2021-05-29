import React, { useEffect } from 'react';
import './App.css';
import DevelopersChat from './components/DevelopersChat/DevelopersChat';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from './features/user/userSlice';
import Login from './components/Login/Login';
import { auth } from './components/Login/firebase.config';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //loggedin
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //loggedout
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {user ? (<DevelopersChat />) : (<Login />)}
    </div>
  );
}

export default App;

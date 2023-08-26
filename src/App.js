import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
const dispach = useDispatch();
  useEffect(() =>{

auth.onAuthStateChanged(userAuth => {
if (userAuth){
//user is logged in
dispach(login({
email: userAuth.email,
uid: userAuth.uid,
displayName: userAuth.displayName,
photoUrl: userAuth.photoURL,
}));
}else{
//user is logged out
dispach(logout());
}

})



  },[])


  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;

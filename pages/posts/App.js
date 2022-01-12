import React, {useState,useEffect} from "react";
import {Switch} from "react-router-dom";
//import AppRouter from "./Router";
 import { authService } from "../_app";
 import Home from "./Home";
 import Auth from "./Auth"
 
function App({isLoggedIn}) {
  const [init,setInit]=useState(false);
  const [userObj,setUserObj]=useState(null);
  useEffect(()=> {
    authService.onAuthStateChanged((user)=> {
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser=()=>{
    const user = authService.currentUser;
    const isLoggedIn=false;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  // const app= ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <>
      {init ? 
      ( <><div>
        {isLoggedIn=true}
        {isLoggedIn?(
           <div
           style={{
           maxWidth: 890,
           width: "100%",
           margin: "0 auto",
           marginTop: 80,
           display: "flex",
           justifyContent: "center",
           }}>
            <Home userObj={userObj} />
          </div>
        ):(
          <Auth />
        )}
      </div>
        </>
      ) : (
        "Initializing..."
      )}
    </>
  );
};

export default App;
// export default app;

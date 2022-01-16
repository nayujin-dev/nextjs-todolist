import React, {useState,useEffect} from "react";
//import AppRouter from "./Router";
 import { authService } from "../../src/fbase";
 import Home from "../../lib/Home";
 import Auth from "./Auth"

function App() {
  const [init,setInit]=useState(false);
  const [userObj,setUserObj]=useState(null);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=> {
    authService.onAuthStateChanged((user)=> {
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        setIsLoggedIn(true);
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
  return (
    <>
      {init ? 
      ( <><div>
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
            {/* <Comment userObj={userObj} /> */}
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


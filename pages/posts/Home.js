import React, {useState, useEffect } from "react";
import { dbService, storageService } from "../_app";
import Nweet from "../Nweet";
import NweetFactory from "../NweetFactory";
import App from "./App";
const Home= ({ userObj }) => {
    
    const [nweets, setNweets] = useState([]);
    
    useEffect(()=>{
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setNweets(nweetArray);
          });
    },[]);
    
    return(
        <div className="container">
            <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
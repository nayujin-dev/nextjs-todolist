import React, {useState, useEffect } from "react";
import { dbService, storageService, } from "../src/fbase";
import CommentFactory from "./CommentFactory";
import Nweet from "./Nweet";
import NweetFactory from "./NweetFactory";

const Home= ({ userObj }) => {
    
    const [nweets, setNweets] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setNweets(nweetArray);
          });
        //   dbService.collection("nweets").doc().collection("comments").onSnapshot((snapshot) => {
        //     const commentArray = snapshot.docs.map((doc) => ({
        //       id: doc.id,
        //       ...doc.data(),
        //     }));
            
        //     setComments(commentArray);
        //   });
    },[]);
    
    return(
        <div className="container">
            <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.createdAt}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}  
                    />                   
                ))}
                
            
            </div>
        </div>
    );
};
export default Home;

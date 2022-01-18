import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService, getDoc,collection } from "../src/fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";


const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (event) => {
    if (nweet === "") {
      return;
    }
    event.preventDefault();
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      checked: false,
      parentId:null,
    };
  await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    
  };
  
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
 
  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="추가할 일정을 입력하세요"
          maxLength={120}
          checked={false}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      
    </form>
  );
};
export default NweetFactory;
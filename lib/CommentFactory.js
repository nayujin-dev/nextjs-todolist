import React, { useEffect, useState } from "react";
import { storageService, dbService } from "../src/fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faCommentSlash } from "@fortawesome/free-solid-svg-icons";

const CommentFactory = ({ nweetObj }) => {
  const [comment, setComment] = useState("");
  const [newcomment, setnewComment] = useState([]);

  const putComment = async (event) => {
    if (comment === "") {
      return;
    }
    event.preventDefault();
    const commentObj = {
      tex: comment,
      createdAt: Date.now(),
    };
    await dbService.collection(`nweets/${nweetObj.parentId}/comments`).add(commentObj);
    setComment("");
    // setnewComment(comment);
  };
  const onChangeComment = (event) => {
    const {
      target: { value },
    } = event;
    setComment(value);
  };
//   const showcomment = (event) =>{
//     event.preventDefault();
//     dbService.collection("nweets").doc(`${nweetObj.parentId}`).collection("comments").onSnapshot((snapshot) => {
//          const commentArray = snapshot.docs.map((doc) => ({
//            id: doc.id,
//            ...doc.data(),
//          }));
//          setnewComment(commentArray);
//        });

//  }
const getComments= async() =>{
  const dbComments=await dbService.collection("nweets").doc().collection("comments").get();
  dbComments.forEach((document)=>{
    const cmObj={
      ...document.data(),
      id: document.id,
    };
    setnewComment((prev)=>[cmObj, ...prev]);
  });
};
useEffect(()=>{
  getComments();
},[]);

  return (
    <>
    <form onSubmit={putComment} className="factoryForm">
      <div className="factoryInput__container">
      <input 
        type="text" 
        value={comment}
        placeholder="댓글을 남겨주세요"
        onChange={onChangeComment}
        className="comment"  
      />
      <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <div>
       {newcomment.map((comment)=>(
         <div key={comment.id}>
           <h4>{comment.comment}</h4>
         </div>
       ))}
    
      {/* <h4>{newcomment}</h4> */}
     </div>
     </form>
     
    </>
  );
};
export default CommentFactory;
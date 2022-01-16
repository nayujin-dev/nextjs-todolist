import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../src/fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";


const CommentFactory = () => {
  const [comment, setComment] = useState("");
  const putComment = async (event) => {
    if (comment === "") {
      return;
    }
    event.preventDefault();
    const commentObj = {
      text: comment,
      createdAt: Date.now(),
    };
    await dbService.collection("comments").add(commentObj);
    setComment("");
  };
  const onChangeComment = (event) => {
    const {
      target: { value },
    } = event;
    setComment(value);
  };

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
      {/* <span onClick={putComment} className="commentbtn">
        <FontAwesomeIcon icon={faCommentDots} heigth={200} width={200} />
      </span> */}
      </div>
     </form>
     <h4>{comment.text}</h4>
      </>
  );
};
export default CommentFactory;
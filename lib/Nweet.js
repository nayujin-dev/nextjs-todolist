import React, { useState } from "react";
import { dbService, storageService } from "../src/fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt, faCheck, faCommentDots } from "@fortawesome/free-solid-svg-icons";

import CommentFactory from "./CommentFactory";
import { userObj } from "./Home";

const Nweet = ({ nweetObj, isOwner }) => {
  
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("일정을 삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  
  };
 
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onDoneClick = async(event) => {
    setChecked(!checked);
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
      checked:(!checked)
    });
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {checked? (
        <div className="nweetchecked">
           {editing ? (
            <>
              <form onSubmit={onSubmit}  className="container nweetEdit">
                <input
                  type="text"
                  placeholder="일정을 수정하세요"
                  value={newNweet}
                  required
                  autoFocus
                  onChange={onChange}
                  className="formInput"
                />
                <input type="submit" value="Editing" className="formBtn" />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          ) : (
            <>
              <h4>{nweetObj.text}</h4>
              <CommentFactory />
              {isOwner&&(
                <div className="nweet__actions">
                  <span onClick={onDeleteClick}>
                    <FontAwesomeIcon icon={faTrash} heigth={200} width={200} />
                  </span>
                  <span onClick={toggleEditing}>
                    <FontAwesomeIcon icon={faPencilAlt} heigth={200} width={200} />
                  </span>
                  <span onClick={onDoneClick}>
                    <FontAwesomeIcon icon={faCheck} heigth={200} width={200} />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      ):(
        <div className="nweet">
         {editing ? (
          <>
            <form onSubmit={onSubmit}  className="container nweetEdit">
              <input
                type="text"
                placeholder="일정을 수정하세요"
                value={newNweet}
                required
                autoFocus
                onChange={onChange}
                className="formInput"
              />
              <input type="submit" value="Editing" className="formBtn" />

            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
          </>
        ) : (
          <>
            <h4>{nweetObj.text}</h4>
            <CommentFactory />
            {isOwner&&(
              <div className="nweet__actions">
                <span onClick={onDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} heigth={200} width={200} />
                </span>
                <span onClick={toggleEditing}>
                  <FontAwesomeIcon icon={faPencilAlt} heigth={200} width={200} />
                </span>
                <span onClick={onDoneClick}>
                  <FontAwesomeIcon icon={faCheck} heigth={200} width={200} />
                </span>
              </div>
            )}
          </>
        )}
      </div>
      )}
    </div>
  ); 
};

export default Nweet;
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { comments } from "../../../../../../../Data";
import avt_user from "../../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import "./Comments.css";

const Comments = () => {

  return(
      <div className="comments mb-3">
          <div className="d-flex align-items-center ms-3 mt-3">
              <div>
                  <img className="rounded-circle" width="45px" src={avt_user}/>
              </div>
              <div className="comment-border border">
                  <form className="d-flex align-items-center">
                      <textarea className="comment-input" placeholder="Viết bình luận"/>
                      <button className="comment-button" type="button"><FontAwesomeIcon icon={faPaperPlane}/></button>
                  </form>

              </div>
          </div>
          {
              comments.map((comment_parent,idx) => (
                  <div key={idx}>
                      <div className="content-comment ms-3 d-flex">
                          <div>
                              <img className="rounded-circle" width="40px" src={avt_user}/>
                          </div>
                          <div className="comments-border rounded-comment mt-2">
                              <div className="usename-bold ms-1">Vũ Thu Thanh</div>
                              <div className="ms-1">{comment_parent.comment_parent}</div>
                          </div>
                          <div className="reply-button mt-4 ms-2"><FontAwesomeIcon icon={faReply}/></div>
                      </div>
                      {comment_parent.comment_child.map(comment_child => (
                          <div className="content-comment ms-5 d-flex">
                              <div>
                                  <img className="rounded-circle" width="40px" src={avt_user}/>
                              </div>
                              <div className="comments-border rounded-comment mt-2">
                                  <div className="usename-bold ms-1">Vũ Thu Thanh</div>
                                  <div className="ms-1">{comment_child.content}</div>
                              </div>
                              <div className="reply-button mt-4 ms-2"><FontAwesomeIcon icon={faReply}/></div>
                          </div>
                      ))}
                  </div>
                )
              )
          }

      </div>
            )
}

export default Comments;

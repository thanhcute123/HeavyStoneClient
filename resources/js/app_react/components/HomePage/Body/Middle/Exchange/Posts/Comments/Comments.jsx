import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { comments } from "../../../../../../../Data";
import avt_user from "../../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import "./Comments.css";
import axios from "axios";

const Comments = ({idPost}) => {

    console.log("idPost----", idPost);

    const [dataPost, setDataPost] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataCmt, setDataCmt] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formComment, setFormComment] = useState({
        id: "",
        id_post: "",
        id_user: "",
        id_cmt_child: "",
        id_cmt_parent: "0",
        comment: ""
    })

    const getDataPost = () => {
        axios.get("http://127.0.0.1:8000/api/post/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataPost----", result);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let tags;
                    for (let i in result) {
                        // console.log(result.data[i])
                        tags = JSON.parse(result[i].tags);
                        console.log("tags----",tags);
                        rows.push({
                            id: result[i].id,
                            id_user: result[i].id_user,
                            theme: result[i].theme,
                            content: result[i].content,
                            faculty: tags.faculty,
                            major: tags.major,
                            created_at: result[i].created_at
                        });
                    }
                    setDataPost(rows);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const getDataUser = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setDataUser(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const getDataCmt = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/comment/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datacmt----", result);
                    setIsLoaded(true);
                    setDataCmt(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }



    useEffect(() => {
        getDataPost();
        getDataUser();
        getDataCmt()

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div className="comments mb-3 h-auto">
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
                    dataCmt.map((cmt,idx) => (
                            cmt.id_post === idPost &&
                            <div key={idx}>
                                {cmt.id_cmt_parent === 0 &&
                                    <div className="content-comment ms-3 d-flex">
                                        <div>
                                            <img className="rounded-circle" width="40px" src={avt_user}/>
                                        </div>
                                        {dataUser.map((user) => (
                                            user.id_user === cmt.id_user &&
                                            <div className="comments-border rounded-comment mt-2">
                                                <div className="usename-bold ms-1">{user.username}</div>
                                                <div className="ms-1">{cmt.comment}</div>
                                            </div>
                                        ))}

                                        <div className="reply-button mt-4 ms-2"><FontAwesomeIcon icon={faReply}/></div>
                                    </div>}
                                {
                                    dataCmt.map((cmtC, idx) => (
                                        cmtC.id_cmt_child === 0 && cmtC.id_cmt_parent === cmt.id &&
                                        <div className="content-comment ms-5 d-flex">
                                            <div>
                                                <img className="rounded-circle" width="40px" src={avt_user}/>
                                            </div>
                                            {dataUser.map((user) => (
                                                user.id_user === cmtC.id_user &&
                                                <div className="comments-border rounded-comment mt-2">
                                                    <div className="usename-bold ms-1">{user.username}</div>
                                                    <div className="ms-1">{cmtC.comment}</div>
                                                </div>
                                            ))}
                                            <div className="reply-button mt-4 ms-2"><FontAwesomeIcon icon={faReply}/></div>
                                        </div>
                                    ))

                                }
                            </div>
                        )
                    )
                }

            </div>
        )
    }


}

export default Comments;

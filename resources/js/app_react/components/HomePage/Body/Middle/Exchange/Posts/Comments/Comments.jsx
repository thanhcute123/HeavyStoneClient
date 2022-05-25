import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { comments } from "../../../../../../../Data";
import avt_user from "../../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import axios from "axios";
import "./Comments.css";

const Comments = ({idPost}) => {

    console.log("idPost----", idPost);
    let session = JSON.parse(sessionStorage.getItem('user_login'));

    const [dataPost, setDataPost] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataCmt, setDataCmt] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formComment, setFormComment] = useState({

        id_post: "",
        id_user: "",
        id_cmt_child: "",
        id_cmt_parent: "",
        comment: ""
    })
    const [id_comment, setId_comment] = useState()

    const  updateField = (e, key) => {
        formComment[key] = e.target.value;
        setFormComment({...formComment});
        console.log(formComment);
    }

    const getDataPost = () => {
        axios.get("http://127.0.0.1:8080/api/post/getAll")
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
        axios.get("http://127.0.0.1:8080/api/user/getAll")
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
        axios.get("http://127.0.0.1:8080/api/comment/getAll")
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

    const createComment = () => {

        const formDataComment = formComment;
        console.log("comment---", formComment);

        axios.post("http://127.0.0.1:8080/api/comment/create",{
            id_post: `${idPost}`,
            id_user: `${session.id_user}`,
            id_cmt_child: "",
            id_cmt_parent: "0",
            comment: formDataComment.comment
        })
            .then(res => {
                console.log("ress----", res)
                const resetModal = {
                    id_post: "",
                    id_user: "",
                    id_cmt_child: "",
                    id_cmt_parent: "0",
                    comment: ""
                }

                setFormComment(resetModal);
                getDataCmt()

            })




    }

    const handleCreateComment = (e) => {
      e.preventDefault()
        createComment()
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
                            <textarea value={formComment.comment} className="comment-input" placeholder="Viết bình luận" onChange={(e) => {
                                updateField(e, 'comment')
                            }}/>
                            <button onClick={(e) => {handleCreateComment(e)}} className="comment-button" type="submit"><FontAwesomeIcon icon={faPaperPlane}/></button>
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

                                        <button className="comment-button" type="submit"><FontAwesomeIcon icon={faReply}/></button>
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

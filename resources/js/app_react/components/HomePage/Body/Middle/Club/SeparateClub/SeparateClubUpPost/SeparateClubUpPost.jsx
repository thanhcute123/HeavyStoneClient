import React, {useState, useContext, useEffect} from "react";
import {Button, Modal} from "react-bootstrap";
import avt_user from "../../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {PageClb} from "../../../../../../Store/ContextPageClb";
const SeparateClubUpPost = () => {

    const [show, setShow] = useState(false);
    let session = JSON.parse(sessionStorage.getItem('user_login'));
    const context = useContext(PageClb);
    const [dataUser, setDataUser] = useState([]);
    const [Clubs, setClubs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formCreatePost, setFormCreatePort] = useState({
        id_user: '',
        theme: '',
        content: '',
        club: ''

    })

    const [fileAvatar, setAvatar] = useState('');
    const [preview, setPreview] = useState('');

    const handleChangeImage = (e) => {
        console.log(e.target.files[0]);
        const selectedFile = e.target.files[0]
        setAvatar(selectedFile);
        console.log(fileAvatar);
        const filePreview = URL.createObjectURL(selectedFile)
        setPreview(filePreview);
    }


    const  updateField = (e, key) => {
        formCreatePost[key] = e.target.value;
        setFormCreatePort({...formCreatePost});
        console.log(formCreatePost);
    }

    const getDataUser = () => {
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    // console.log("dataMyClub----", result);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let myClub = [];

                    for (let i in result) {
                        // console.log(result.data[i])
                        if(result[i].id_user === session.id_user) {
                            // console.log("tttttt----", result[i].club);
                            myClub = result[i].club.split(",")
                            // console.log("tagsR----",myClub);
                            rows.push({
                                id_user: result[i].id_user,
                                username: result[i].username,
                                sex: result[i].sex,
                                phone: result[i].phone,
                                id_department: result[i].id_department,
                                avatar: result[i].avatar,
                                club: myClub
                            });

                        }

                    }
                    setDataUser(rows);
                    // console.log("Clubssss---", dataUser);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }


    const getDataClb = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/club/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCLb----", result);
                    setIsLoaded(true);
                    setClubs(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }



    const doInsertPort = () => {
        const postData = formCreatePost;
        console.log("postData---", formCreatePost);
        const imgAvatar = fileAvatar;
        let fileExtension = imgAvatar.name;
        console.log("imgAvatar---", fileExtension);
        let config = {
            headers: {
                'Content-Type': 'form-data',
            }
        }

        let data = new FormData();
        data.append("id_user", session.id_user);
        data.append("theme", formCreatePost.theme);
        data.append("content", formCreatePost.content);
        data.append("club", context.id_clb);
        data.append("image", fileAvatar, fileExtension);
        // console.log("nameImg----", data);

        axios.post("http://127.0.0.1:8080/api/post/createPostClub",data, config)
            .then(res => {
                const resetModal = {
                    id_user: '',
                    theme: '',
                    content: '',
                    club: ''

                }

                setFormCreatePort(resetModal);

            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        doInsertPort();


    }


    useEffect(() => {
        getDataUser();
        getDataClb();
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="mt-4">
                <Modal show={show} onHide={handleClose}
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="">Tạo bài viết</div>
                        </Modal.Title>
                    </Modal.Header>
                    {/*<div className="d-flex justify-content-around">*/}
                    {/*<div className="col-lg-8 border-end">*/}

                    <Modal.Body>
                        {dataUser.map((user, idx) => (
                            <div key={idx} className="d-flex align-items-center">

                                <div >
                                    {
                                        user.avatar !== null && <img src={user.avatar.slice(6)} className="rounded-circle" width="35px"/> ||
                                        user.avatar === null && <img src={avt_user} className="rounded-circle" width="35px"/>}
                                </div>
                                <div>
                                    {user.username}
                                    {Clubs.map((club, idx) => (
                                        club.club_code === context.id_clb &&
                                        <div key={idx} className="text-muted time rounded-pill border p-1 ps-2"><FontAwesomeIcon icon={faUsers}/>{club.club_name}</div>
                                    ))}

                                </div>

                            </div>
                        ))}

                        <div>
                            <form>
                                <textarea className="uppost-textarea" placeholder="Bài viết thuộc chủ đề nào nhỉ?" rows="1" value={formCreatePost.theme} onChange={(e) => {
                                    updateField(e, 'theme')
                                }}></textarea>
                                <textarea className="uppost-textarea" placeholder="Cùng chia sẻ nào bạn nhé!" rows="7" value={formCreatePost.content} onChange={(e) => {
                                    updateField(e, 'content')
                                }}></textarea>
                                {fileAvatar &&  <img className="exchange-image" src={preview}/> }
                            </form>
                        </div>
                        <div className="border shadow-sm mt-5 p-3 rounded-3 d-flex justify-content-between">
                            <div>Thêm vào bài viết</div>
                            <div className="">
                                <form>
                                    <input id="file-input" className="input-file" type="file" onChange={(e) => {handleChangeImage(e)}}/>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => {handleSubmit(e); setAvatar('');  handleClose()}}>Đăng</button>
                        </div>
                    </Modal.Footer>


                </Modal>
                <div className="border shadow-sm mt-5 p-3 rounded-3">
                    <div className="d-flex justify-content-center border-bottom p-3 ">
                        {dataUser.map((user, idx) => (

                            <div key={idx}>
                                {
                                user.avatar !== null && <img src={user.avatar.slice(6)} className="rounded-circle" width="35px"/> ||
                                user.avatar === null && <img src={avt_user} className="rounded-circle" width="35px"/>}
                             </div>
                            ))}
                        <div className="comment-border rounded-pill">
                            <form>
                                <input readOnly onClick={handleShow} className="comment-input" type="text" size="85" placeholder="Cùng nhau chia sẻ nào!"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default SeparateClubUpPost;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from "@fortawesome/free-solid-svg-icons";
import "./UpPost.css";
import avt_user from "../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import mim from "../../../../../../img/clb/mim.jpg";

const UpPost = () => {

    let session = JSON.parse(sessionStorage.getItem('user_login'));
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [faculty, setFaculty] = useState([]);
    const [majors, setMajors] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [id_faculty, setId_Faculty] = useState('')
    const [formCreatePost, setFormCreatePort] = useState({
        id_user: '',
        theme: '',
        content: '',
        faculty: '',
        major: ''

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

    const set_Id_Faculty = (e) => {
        setId_Faculty(e.target.value);
        console.log("id---", id_faculty);
    }

    const  updateField = (e, key) => {
        formCreatePost[key] = e.target.value;
        setFormCreatePort({...formCreatePost});
        console.log(formCreatePost);
    }

    const getDataMajors = () => {
        axios.get("http://127.0.0.1:8080/api/major/getAll")
            .then(res => res.data)
            .then(
                (result) => {

                    setIsLoaded(true);
                    setMajors(result);

                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const getDataFaculty = () => {
        axios.get("http://127.0.0.1:8080/api/department/getAll")
            .then(res => res.data)
            .then(
                (result) => {

                    setIsLoaded(true);
                    setFaculty(result);

                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const getDataUsers = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {

                    setIsLoaded(true);
                    setUsers(result);

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

        let name_faculty = ''
        for (const i in faculty) {
           if(faculty[i].id_department === formCreatePost.faculty) {
               name_faculty = faculty[i].name_department;
           }
        }

        let data = new FormData();
        data.append("id_user", session.id_user);
        data.append("theme", formCreatePost.theme);
        data.append("content", formCreatePost.content);
        data.append("faculty", name_faculty);
        data.append("major", formCreatePost.major);
        data.append("image", fileAvatar, fileExtension);
        console.log("nameImg----", data);

        axios.post("http://127.0.0.1:8080/api/post/create",data, config)
            .then(res => {
                const resetModal = {
                    id_user: '',
                    theme: '',
                    content: '',
                    faculty: '',
                    major: '',
                }

                setFormCreatePort(resetModal);

            })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        doInsertPort();


    }

    useEffect(() => {
        getDataFaculty();
        getDataMajors();
        getDataUsers();
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="mt-4">
                <Modal show={show} onHide={handleClose}
                       size="xl"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="uppost-title">Tạo bài viết</div>
                        </Modal.Title>
                    </Modal.Header>
                    <div className="d-flex justify-content-around">
                        <div className="col-lg-8 border-end">

                            <Modal.Body>
                                { users.map((user, idx) => (
                                    user.id_user === session.id_user &&
                                    <div key={idx} className="d-flex align-items-center">

                                        <div >
                                            {
                                             user.avatar !== null && <img src={user.avatar.slice(6)} className="rounded-circle" width="35px"/> ||
                                             user.avatar === null && <img src={avt_user} className="rounded-circle" width="35px"/>}
                                        </div>
                                        <div>
                                            {user.username}
                                        </div>
                                    </div>
                                ))}


                                <div>
                                    <form>
                                        <textarea className="uppost-textarea" placeholder="Chủ đề bài viết là gì nhỉ?" rows="1" value={formCreatePost.theme} onChange={(e) => {
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
                        </div>
                        <div className="col-lg-4">

                            <Modal.Body>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <FontAwesomeIcon className="font-icon border-end me-1 p-1" icon={faTags}/>
                                    </div>
                                    <div>
                                        Bài viết thuộc?
                                    </div>

                                </div>
                                <div>
                                    <div className="filter">
                                        <div className="filter-option">

                                            <select value={formCreatePost.faculty} className="form-control" aria-label="Default select example" onChange={(e) => {
                                                set_Id_Faculty(e)
                                                updateField(e, 'faculty')
                                            }}>
                                                <option selected>Khoa</option>
                                                {faculty.map(faculty => (
                                                    <option value={faculty.id_department}>{faculty.name_department}</option>
                                                ))}


                                            </select>

                                        </div>

                                        <div className="filter-option">
                                            <select value={formCreatePost.major} className="form-control" aria-label="Default select example" onChange={(e) => {
                                                updateField(e, 'major')
                                            }}>
                                                <option>Ngành</option>
                                                {majors.map((major, idx) => (
                                                    major.id_department === formCreatePost.faculty &&
                                                    <option key={idx} value={major.major}>{major.major}</option>
                                                ))}

                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </Modal.Body>

                        </div>

                    </div>


                </Modal>
                <div className="border shadow-sm mt-5 p-3 rounded-3">
                    <div className="d-flex justify-content-center border-bottom p-3 ">
                        {users.map((user, idx) => (
                            user.id_user === session.id_user &&
                            <div>
                                {
                                    user.avatar !== null && <img src={user.avatar.slice(6)} className="rounded-circle me-2" width="35px"/> ||
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

export default UpPost;

import React, {useState, useEffect} from "react";
import $ from 'jquery';
import avt_user from '../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg';
import avt from '../../../../../../../../public/images/1653443007.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane, faUpload} from '@fortawesome/free-solid-svg-icons'
import Collapse from "react-bootstrap/Collapse";
import {Card} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Profile.css';
import header from "../../../Header/Header";


const Profile = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    let session = JSON.parse(sessionStorage.getItem('user_login'));

    let id;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);
    const [errors_password_new, setErrors_password_new] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [formChangePassword, setFormChangePassword] = useState({
        password: '',
        new_password: '',
        confirm_password: ''
    });

    const [fileAvatar, setAvatar] = useState('');
    const [preview, setPreview] = useState('');

    const handleChangeImage = (e) => {
        // console.log(e.target.files[0]);
        const selectedFile = e.target.files[0]
        setAvatar(selectedFile);
        console.log(fileAvatar);
        const filePreview = URL.createObjectURL(selectedFile)
        setPreview(filePreview);
    }

    const  updateField = (e, key) => {
        formChangePassword[key] = e.target.value;
        setFormChangePassword({...formChangePassword});
        console.log(formChangePassword);
    }

    const getDataUsers = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    // console.log("datauser----", result);
                    setIsLoaded(true);
                    setUsers(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }


    const changePassword = () => {

            const postDataPassword = formChangePassword;
            console.log("postDataPasword---", formChangePassword);

            axios.post(`http://127.0.0.1:8080/api/user/changepassword/${id}`,{
                password: formChangePassword.password,
                password_new: formChangePassword.new_password,
                password_new_confirmation: formChangePassword.confirm_password
                // postData
            })
                .then(res => {
                    // console.log("ress----", res);
                    const resetModal = {
                        password: '',
                        new_password: '',
                        confirm_password: ''
                    }

                    setFormChangePassword(resetModal);
                    // getDataUserApi()
                    sessionStorage.removeItem('user_login');
                    navigate('/signin');
                    window.location.reload();

                })
                .catch(function (error) {
                    return new Promise((done) => {
                        if (error.response) {
                            console.log("errrro---", error.response.data.error.password_new);
                            setErrors(error.response.data.error);
                            setErrors_password_new(error.response.data.error.password_new)
                            if(done)
                                done(errors)
                            console.log("thenError---", errors);

                        } else if (error.request) {

                            console.log(error.request);
                        } else {

                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    })


                })



    }

    const upLoadAvatar = () => {

        const imgAvatar = fileAvatar;
        let fileExtension = imgAvatar.name;
        console.log("imgAvatar---", fileExtension);
        let config = {
            headers: {
                'Content-Type': 'form-data',
            }
        }
        let data = new FormData();
        data.append("avatar", fileAvatar, fileExtension);
        for (const i in users) {
            if(users[i].id_user === session.id_user) {
                id = users[i].id;
            }
        }
        console.log("idddd----", id);
        axios.post(`http://127.0.0.1:8080/api/user/upLoadAvatar/${id}`, data, config)
            .then(res => {
                console.log("ress----", res)
                getDataUsers()

            })
            .catch(function (error) {
                return new Promise((done) => {
                    if (error.response) {
                        console.log("errrro---", error.response.data.error.password_new);
                        setErrors(error.response.data.error);
                        setErrors_password_new(error.response.data.error.password_new)
                        if(done)
                            done(errors)
                        console.log("thenError---", errors);

                    } else if (error.request) {

                        console.log(error.request);
                    } else {

                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })


            })



    }

    const handleChangePassword = (e) => {
      e.preventDefault();
      changePassword();
      // alert("hi");
    }
    const handleUploadAvatar = (e) => {
        e.preventDefault();
        upLoadAvatar();
        // alert("hi");
    }


    useEffect(() => {
        getDataUsers();

    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        let image;
        return (
            <div className="container rounded bg-white mt-5 mb-5">

                <div className="row w-100">
                    <div className="panel panel-default col-md-3">
                        <div className="panel-body">
                            <form
                                  encType="multipart/form-data">
                                <br/><br/>
                                <div className="picture-container">
                                    <div className="picture">
                                        {fileAvatar && <img src={preview} className="picture-src" id="wizardPicturePreview" title=""/> ||
                                         users.map((user, idx) => (
                                            user.id_user === session.id_user && user.avatar !== null && <img src={user.avatar.slice(6)} className="picture-src" id="wizardPicturePreview" title=""/> ||
                                            user.id_user === session.id_user && user.avatar === null && <img src={avt_user} className="picture-src" id="wizardPicturePreview" title=""/>

                                        ))}



                                        <input type="file" className="form-control" id="img_avt" name="img_avt"
                                               onChange={(e) => {handleChangeImage(e)}}/>
                                    </div>
                                    <h6 className="choose-picture">Choose Picture</h6>


                                </div>
                                <br/>
                                <div className="form-group ms-4">
                                    <button onClick={(e) => {handleUploadAvatar(e)}} className="btn btn-upload pull-left"
                                            type="submit"><FontAwesomeIcon icon={faUpload}/> Upload
                                    </button>

                                </div>
                                <div className="alert alert-danger invisible"></div>
                            </form>
                        </div>
                    </div>


                    <div className="col-md-5 border-right">
                        <div className="py-5">
                            <div className="panel panel-default">
                                <div className="panel-body border-end pe-3">
                                    <form>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Profile Settings</h4>
                                        </div>
                                        <div className="row mt-2">
                                            {users.map((user, idx) =>(
                                                user.id_user === session.id_user &&
                                                <div key={idx} className="col-md-12">
                                                    <label className="labels">Name</label>
                                                    <input type="text" className="form-control" id="dn_update" value={user.username}/>
                                                </div>
                                            ))}


                                        </div>
                                        <div className="row mt-3">

                                            <div className="col-md-12"><label className="labels">Email</label>
                                                <input disabled type="text" className="form-control" id="email_update"
                                                value={session.email}/></div>

                                        </div>
                                        <div className="row mt-3">
                                            {users.map((user, idx) =>(
                                                user.id_user === session.id_user &&
                                                <div key={idx} className="col-md-12"><label className="labels">Phone</label>
                                                    <input type="text" className="form-control" id="phone_update"
                                                    value={user.phone}/>
                                                </div>
                                            ))}

                                        </div>
                                        <br/><br/>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-upload">Save</button>
                                        </div>
                                        <br/>
                                        <div className="alert alert-danger invisible"/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="py-5">

                            <div className="col-md-12">
                                <label className="labels">Password</label>
                                <input type="password" readOnly className="form-control" id="pass_update"/>
                            </div>
                            <br/>
                            <div  className=" hidden-phone visible-tablet"
                                  onClick={() => setOpen(!open)}
                                  aria-expanded={open}>
                                <a className="float-end style-a">Change Password</a>

                            </div>
                            <div style={{minHeight: '150px'}}>
                                <Collapse in={open} dimension="width">
                                    <div id="example-collapse-text">
                                        <Card body style={{width: '220px'}}>

                                            <div id="moreField" className="panel panel-default">
                                                <div className="panel-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Old Password</label>
                                                            <input value={formChangePassword.password} type="password" className="form-control" id="oldPwChange" onChange={(e) =>{
                                                                updateField(e, 'password')
                                                            }}/>
                                                            {errors.password && <div className="error-msg">{errors.password}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New Password</label>
                                                            <input value={formChangePassword.new_password} type="password" className="form-control" id="newPwChange" onChange={(e) => {
                                                                updateField(e, 'new_password')
                                                            }}/>
                                                            {errors.password_new &&
                                                                <div className="error-msg">{errors.password_new}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm new password</label>
                                                            <input value={formChangePassword.confirm_password} type="password" className="form-control" id="reNewPwChange" onChange={(e) => {
                                                                updateField(e, 'confirm_password')
                                                            }}/>
                                                            {errors.password_new && <div className="error-msg">{errors.password_new}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <button onClick={(e) => {handleChangePassword(e)}} id="change_pw" type="submit" className="btn btn-upload mt-3">Save</button>
                                                        </div>

                                                        <div className="alert alert-danger invisible"></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </Collapse>
                            </div>

                        </div>

                        <div className="clearfix"></div>
                        <br/>
                        <div className="alert alert-danger invisible"></div>
                    </div>

                </div>

            </div>
        )
    }

}
export default Profile;

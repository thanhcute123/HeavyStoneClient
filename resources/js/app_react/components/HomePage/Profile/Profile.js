import React, {useState} from "react";
import avt_user from '../../img/Logo/212d12e421963f8a66f95aece1182069.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane, faUpload} from '@fortawesome/free-solid-svg-icons'
import Collapse from "react-bootstrap/Collapse";
import {Card} from "react-bootstrap";
import './Profile.css';

const Profile = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="container rounded bg-white mt-5 mb-5">

            <div className="row">
                <div className="panel panel-default col-md-3">
                    <div className="panel-body">
                        <form action="" method="POST" id="formUpAvt"
                              encType="multipart/form-data">
                            <br/><br/>
                            <div className="picture-container">
                                <div className="picture">
                                    <img src={avt_user} className="picture-src"
                                         id="wizardPicturePreview" title=""/>
                                    <input type="file" className="form-control" id="img_avt" name="img_avt"
                                           onChange="preUpAvt();"/>
                                </div>
                                <h6 className="">Choose Picture</h6>


                            </div>
                            <br/>
                            <div className="form-group ms-5">
                                <button className="btn btn-facebook pull-left"
                                        type="submit"><FontAwesomeIcon icon={faUpload}/> Upload
                                </button>

                            </div>
                            <div className="alert alert-danger invisible"></div>
                        </form>
                    </div>
                </div>


                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="panel panel-default">
                            <div className="panel-body border-end pe-5">
                                <form method="POST" onSubmit="return false;" id="formUpdateInfo">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Profile Settings</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label className="labels">Name</label>
                                            <input type="text" className="form-control" id="dn_update" value=""/>
                                        </div>

                                    </div>
                                    <div className="row mt-3">

                                        <div className="col-md-12"><label className="labels">Email</label><input
                                            type="text" className="form-control" id="email_update"
                                            value=""/></div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Phone</label><input
                                            type="text" className="form-control" id="phone_update"
                                            value=""/></div>

                                    </div>
                                    <br/><br/>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                    <br/>
                                    <div className="alert alert-danger invisible"/>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-md-4">
                    <div className="p-3 py-5">

                        <div className="col-md-12">
                            <label className="labels">Password</label>
                            <input type="password" readOnly className="form-control" id="pass_update"/>
                           </div>
                        <br/>
                        <div  className=" hidden-phone visible-tablet"
                             onClick={() => setOpen(!open)}
                             aria-expanded={open}>
                            <a className="float-end">Đổi mật khẩu</a>

                        </div>
                        <div style={{minHeight: '150px'}}>
                            <Collapse in={open} dimension="width">
                                <div id="example-collapse-text">
                                    <Card body style={{width: '325px'}}>

                                        <div id="moreField" className="panel panel-default">
                                            <div className="panel-body">
                                                <form method="POST" id="formChangePw" onSubmit="return false;">
                                                    <div className="form-group">
                                                        <label>Mật khẩu cũ</label>
                                                        <input type="password" className="form-control" id="oldPwChange"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Mật khẩu mới</label>
                                                        <input type="password" className="form-control" id="newPwChange"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Nhập lại mật khẩu mới</label>
                                                        <input type="password" className="form-control" id="reNewPwChange"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <button id="change_pw" type="submit" className="btn btn-primary mt-3">Lưu thay
                                                            đổi
                                                        </button>
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
export default Profile;
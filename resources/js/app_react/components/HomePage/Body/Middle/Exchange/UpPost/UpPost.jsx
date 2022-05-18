import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileImage, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import avt_user from "../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import "./UpPost.css";

const UpPost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <div className="d-flex align-items-center">
                                <div >
                                    <img className="rounded-circle" width="45px" src={avt_user}/>
                                </div>
                                <div>
                                    Vũ Thu Thanh
                                </div>
                            </div>
                            <div>
                                <form>
                                    <textarea className="uppost-textarea" placeholder="Thu Thanh, hãy cùng chia sẻ nào!" rows="7"></textarea>
                                </form>
                            </div>
                            <div className="border shadow-sm mt-5 p-3 rounded-3 d-flex justify-content-between">
                                <div>Thêm vào bài viết</div>
                                <div className="">
                                    <form>
                                        <input id="file-input" className="input-file" type="file"/>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-100 button-uppost" onClick={handleClose}>
                                Đăng
                            </Button>
                        </Modal.Footer>
                    </div>
                    <div className="col-lg-4">

                        <Modal.Body>
                            <div className="d-flex align-items-center">
                                <div>
                                   <FontAwesomeIcon className="font-icon border-end me-1 p-1" icon={faTags}/>
                                </div>
                                <div>
                                    Bài viết thuộc chủ đề?
                                </div>

                            </div>
                            <div>
                                <div className="filter">
                                    <div className="filter-option">
                                        <select>
                                            <option>Khoa</option>
                                            <option>Toán - Cơ - Học</option>
                                            <option>Vật lý</option>
                                            <option>Hóa học</option>
                                            <option>Sinh học</option>
                                            <option>Địa lý</option>
                                            <option>Địa chất</option>
                                            <option>Môi trường</option>
                                            <option>Khí tượng Thủy văn và Hải dương học</option>

                                        </select>
                                    </div>
                                    {/*<div className="col-lg-1"></div>*/}
                                    <div className="filter-option">
                                        <select>
                                            <option>Ngành</option>
                                            <option>Máy tính và Khoa học thông tin</option>
                                        </select>
                                    </div>
                                    {/*<div className="col-lg-1"></div>*/}
                                    <div className="filter-option">
                                        <select>
                                            <option>Bộ môn</option>
                                        </select>
                                    </div>
                                    <div className="filter-option">
                                        <select>
                                            <option>Câu lạc bộ</option>

                                        </select>
                                    </div>
                                    {/*<div className="col-lg-1"></div>*/}
                                </div>

                            </div>
                        </Modal.Body>

                    </div>

                </div>
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Đăng*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}

            </Modal>
            <div className="border shadow-sm mt-5 p-3 rounded-3">
                <div className="d-flex justify-content-center border-bottom p-3 ">
                    <div>
                        <img className="rounded-circle" width="40px" src={avt_user}/>
                    </div>
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

export default UpPost;
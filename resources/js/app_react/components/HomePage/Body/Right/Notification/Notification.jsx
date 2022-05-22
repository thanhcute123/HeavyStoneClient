import React, {useState, useEffect} from "react";
import axios from "axios";
import $ from 'jquery';
import "../../../../../../../../public/ionicons/css/ionicons.min.css";
import "../Notification/Notification.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faTags} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal} from "react-bootstrap";
import avt_user from "../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";

const Notification = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataNoti, setDataNoti ] = useState([]);
    const [formDataNoti, setFormDataNoti] = useState([])

    const getDataNotiApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/notification/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCLb----", result);
                    setIsLoaded(true);
                    setDataNoti(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const formData = (data) => {
        setFormDataNoti(data)
    }

    const str = `p>Thân gửi các bạn sinh viên!</p><p>&nbsp;Thực hiện công văn số 1116/ĐHKHTN-CTSV ngày 29/4/2022 của Trường Đại học Khoa học Tự nhiên về việc nhắc nhở sinh viên thực hiện các quy định trong thời gian nghỉ Lễ 30/4 và 01/5 năm 2022, Khoa Toán - Cơ - Tin học thông báo nhắc nhở sinh viên nghiêm chỉnh thực hiện những nội dung sau:</p><p>1. Sinh viên được nghỉ học từ ngày 30/04/2022 đến hết ngày 03/05/2022 theo công văn số 798/ĐHKHTN-TCCB-HC ngày 05/4/2022.&nbsp;</p><p>2. Nghiêm chỉnh chấp hành các chủ trương, chính sách của Đảng và Nhà nước; không vi phạm pháp luật; không tham gia tụ tập đông người gây rối trật tự công cộng trái với các quy định của pháp luật.&nbsp;</p><p>3. Nghiêm chỉnh chấp hành Luật giao thông, không tham gia tụ tập, cổ vũ cho việc đua xe trái phép; nghiêm túc thực hiện: “Đã uống rượu, bia - không lái xe”; “Không sử dụng điện thoại khi lái xe”; “Đội mũ bảo hiểm đạt chuẩn khi đi mô tô, xe máy, xe đạp điện”; “Thắt dây an toàn khi ngồi trên xe ô tô”; “Mặc áo phao khi đi các phương tiện giao thông đường thủy”; thực hiện nghiêm túc quy định về phòng, chống dịch bệnh Covid-19.</p>`;

    useEffect(() => {
        const timer = window.setInterval(() => {
            getDataNotiApi();
        }, 10000);
        return () => { // Return callback to run on unmount.
            window.clearInterval(timer);
        };
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="w-100">
                <Modal show={show} onHide={handleClose}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >

                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="">{formDataNoti.theme}</div>
                        </Modal.Title>
                    </Modal.Header>
                    {/*<div className="d-flex justify-content-around">*/}
                    {/*    <div className="col-lg-8 border-end">*/}

                    <Modal.Body>
                        <div dangerouslySetInnerHTML={{__html: formDataNoti.content}} className="content_noti">
                            {/*{formDataNoti.content}*/}
                            {/*<p>Thân gửi các bạn sinh viên!</p><p>&nbsp;Thực hiện công văn số 1116/ĐHKHTN-CTSV ngày 29/4/2022 của Trường Đại học Khoa học Tự nhiên về việc nhắc nhở sinh viên thực hiện các quy định trong thời gian nghỉ Lễ 30/4 và 01/5 năm 2022, Khoa Toán - Cơ - Tin học thông báo nhắc nhở sinh viên nghiêm chỉnh thực hiện những nội dung sau:</p><p>1. Sinh viên được nghỉ học từ ngày 30/04/2022 đến hết ngày 03/05/2022 theo công văn số 798/ĐHKHTN-TCCB-HC ngày 05/4/2022.&nbsp;</p><p>2. Nghiêm chỉnh chấp hành các chủ trương, chính sách của Đảng và Nhà nước; không vi phạm pháp luật; không tham gia tụ tập đông người gây rối trật tự công cộng trái với các quy định của pháp luật.&nbsp;</p><p>3. Nghiêm chỉnh chấp hành Luật giao thông, không tham gia tụ tập, cổ vũ cho việc đua xe trái phép; nghiêm túc thực hiện: “Đã uống rượu, bia - không lái xe”; “Không sử dụng điện thoại khi lái xe”; “Đội mũ bảo hiểm đạt chuẩn khi đi mô tô, xe máy, xe đạp điện”; “Thắt dây an toàn khi ngồi trên xe ô tô”; “Mặc áo phao khi đi các phương tiện giao thông đường thủy”; thực hiện nghiêm túc quy định về phòng, chống dịch bệnh Covid-19.</p>*/}
                        </div>
                    </Modal.Body>

                </Modal>
                {dataNoti.map((noti, idx) => (
                    <div key={idx} className="border shadow-sm mt-2 p-1 rounded-3 justify-content-between">
                        <div className="notification-title" >
                            {noti.theme}
                        </div>
                        <div className="notification-sub-title text-muted mb-1" onClick={() => {
                            formData(noti);
                            handleShow()
                        }}>
                            <i className="ion-android-more-horizontal"/>

                        </div>

                    </div>
                ))}

            </div>

        )

    }


}
export default Notification;

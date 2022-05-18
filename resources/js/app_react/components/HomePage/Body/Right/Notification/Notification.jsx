import React, {useState} from "react";
import "../Notification/Notification.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faTags} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal} from "react-bootstrap";
import avt_user from "../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";

const Notification = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let content = String.raw`Thân gửi các bạn sinh viên, Thực hiện công văn số 1116/ĐHKHTN-CTSV ngày 29/4/2022 của Trường Đại học Khoa học Tự nhiên về việc nhắc nhở sinh viên thực hiện các quy định trong thời gian nghỉ Lễ 30/4 và 01/5 năm 2022, Khoa Toán - Cơ - Tin học thông báo nhắc nhở sinh viên nghiêm chỉnh thực hiện những nội dung sau:

1. Sinh viên được nghỉ học từ ngày 30/04/2022 đến hết ngày 03/05/2022 theo công văn số 798/ĐHKHTN-TCCB-HC ngày 05/4/2022.

2. Nghiêm chỉnh chấp hành các chủ trương, chính sách của Đảng và Nhà nước; không vi phạm pháp luật; không tham gia tụ tập đông người gây rối trật tự công cộng trái với các quy định của pháp luật.

3. Nghiêm chỉnh chấp hành Luật giao thông, không tham gia tụ tập, cổ vũ cho việc đua xe trái phép; nghiêm túc thực hiện: “Đã uống rượu, bia - không lái xe”; “Không sử dụng điện thoại khi lái xe”; “Đội mũ bảo hiểm đạt chuẩn khi đi mô tô, xe máy, xe đạp điện”; “Thắt dây an toàn khi ngồi trên xe ô tô”; “Mặc áo phao khi
đi các phương tiện giao thông đường thủy”; thực hiện nghiêm túc quy định về phòng, chống dịch bệnh Covid-19.

4. Không sản xuất, buôn bán, vận chuyển, tàng trữ, sử dụng pháo, thuốc nổ, gia súc, gia cầm có mầm bệnh, dịch bệnh và các loại hàng cấm khác; tham gia các hoạt động thể thao văn hóa lành mạnh.

Trân trọng thông báo.`;
    return (
        <div className="border shadow-sm mt-2 p-1 rounded-3 justify-content-between">
            <div className="notification-title" onClick={handleShow}>
                Thông báo nghỉ lễ 30-4 và 1-5
            </div>
            <div className="notification-sub-title text-muted mb-1">
                Sinh viên được nghỉ học từ ngày 30/04/2022 đến hết ngày 03/05/2022 theo công văn số 798/ĐHKHTN-TCCB-HC ngày 05/4/2022...

            </div>
            <Modal show={show} onHide={handleClose}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="">Thông báo nghỉ giỗ tổ Hùng vương</div>
                    </Modal.Title>
                </Modal.Header>
                {/*<div className="d-flex justify-content-around">*/}
                {/*    <div className="col-lg-8 border-end">*/}

                        <Modal.Body>
                            <div className="">
                                <p className="w-100 text-notification">{content}</p>
                            </div>
                        </Modal.Body>

            </Modal>
        </div>
    )

}
export default Notification;
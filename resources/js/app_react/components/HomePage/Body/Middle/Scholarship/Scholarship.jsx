import React, {useState} from "react";
import scholarship_img from "../../../../../img/Scholarship/270612826_1336468403463215_8931351860273639029_n.jpg";
import scholarship_img_1 from  "../../../../../img/Scholarship/276150560_10221051187138421_8964575224927804522_n.jpg";
import scholarship_img_2 from "../../../../../img/Scholarship/donghanh-img-placeholder.by9wgq.jpg";
import scholarship_img_3 from "../../../../../img/Scholarship/hoc-bong-duoc-chia-lam-2-loai-toan-phan-va-ban-toan-phan.jpg";
import "../Scholarship/Scholarship.css";
import {Modal} from "react-bootstrap";

const Scholarship = () => {

    const [show, setShow] = useState(false);
    const [content, setContent] = useState(1);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
            <Modal show={show} onHide={handleClose}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="">RA MẮT WEBSITE KÊNH THÔNG TIN HỌC BỔNG</div>
                    </Modal.Title>
                </Modal.Header>
                {/*<div className="d-flex justify-content-around">*/}
                {/*    <div className="col-lg-8 border-end">*/}

                <Modal.Body>
                    {content === 1 ?
                        <div className="content_noti" dangerouslySetInnerHTML={{__html: `<p>
                            Được ra mắt và chính thức đi vào hoạt động từ tháng 12/2021, với tôn chỉ “Ươm mầm tài năng và kết nối đam mê nghiên cứu khoa học” để tạo ra một “VNU' s researchers talent pool” - cung cấp nguồn lực đa dạng, giàu tư duy đổi mới, sáng tạo, nhiệt huyết, tiên phong và chủ động kiến tạo cho Chiến lược phát triển Đại học Quốc gia Hà Nội đến năm 2030, tầm nhìn 2045, "Kênh thông tin học bổng" là một thành phần quan trọng trong Mạng kết nối Tài năng ĐHQGHN (VNU’s Talent Network).
                            <br>Cổng thông tin chính thức để triển khai các chương trình, đề án, dự án và chính sách của ĐQHGHN về ươm tạo, thu hút và trọng dụng tài năng khoa học của ĐHQGHN. Bên cạnh đó, VNU’s Talent Network là diễn đàn chia sẻ, gắn kết những người làm chính sách, những người có khả năng hỗ trợ về nguồn lực, cơ chế với các nhà khoa học và người học của ĐHQGHN.
                                <br>VNU’s Talent Network sẽ phát triển theo 4 trục tương ứng với 4 hoạt động chính:
                                    <br>&nbsp;Phát hiện - Tìm kiếm học sinh, sinh viên tài năng KH&amp;CN và hỗ trợ học sinh, sinh viên học giỏi có hoàn cảnh khó khăn;</br>
                                    <br>&nbsp;Thu hút - Triển khai học bổng đại học, thạc sĩ, tiến sĩ và thực tập sinh sau tiến sĩ; chương trình trao đổi sinh viên, giảng viên;</br>
                                    <br>&nbsp;Ươm tạo nhà khoa học - Đào tạo, bồi dưỡng, phát triển năng lực nghiên cứu;</br>
                                    <br>&nbsp;Đãi ngộ - Thực hiện đề tài, dự án, nhiệm vụ KH&amp;CN hằng năm</br>
                                    <br>Link website: <a href="">http://hocbong.vnu.edu.vn/index.html</a>
                                    </br><a className="style-a" href=""><strong>#ĐHQGHN</strong></a>
                                </br><a className="style-a" href=""><strong>#VNUHANOI</strong></a>
                            </br><a className="style-a" href=""><strong>#kenhhocbongvnu</strong></a>
                        </p>`}}>
                        </div> :
                         <div className="content_noti" dangerouslySetInnerHTML={{__html: `<p>Hiện tại Chương trình Học bổng sau đại học tại nước ngoài của Tập đoàn Vingroup đang tiếp nhận hồ sơ học bổng khóa tiếp theo kể từ ngày 10/12/2021 và sẽ đóng cổng tiếp nhận hồ sơ học bổng năm 2022 với các mốc thời gian như sau:<br>- Quy trình 1 (dành cho ứng viên đã có thư mời nhập học cho năm học 2022/23): 18h00, ngày 15/04/2022<br>- Quy trình 2 (dành cho ứng viên chưa có thư mời nhập học và ứng tuyển trong năm học 2023/24): 18h00, ngày 31/05/2022<br><br>Với mong muốn giúp các sinh viên và giảng viên/nghiên cứu viên biết đến cơ hội học bổng Vingroup và tạo cơ hội để các ứng viên tiềm năng gặp gỡ và lắng nghe chia sẻ trực tiếp từ các sinh viên đã nhận học bổng Vingroup về kinh nghiệm chuẩn bị hồ sơ, xin thư giới thiệu, viết bài luận, phỏng vấn và chọn trường đại học, Chương trình Học bổng Vingroup sẽ tổ chức một buổi thông tin trực tuyến (webinar) vào thứ 7, ngày 26/3/2022 tuần này.<br>Mong các thầy cô, các bạn trong việc chia sẻ thông tin về buổi webinar trên tới các ứng viên tiềm năng để khuyến khích các bạn đăng ký tham dự. Thông tin chi tiết buổi webinar như sau:<br><br>Thời gian: 10h00 – 11h30, Thứ 7, ngày 26/03/2022 (giờ Việt Nam)<br>Link đăng ký tham dự: <a href="https://forms.office.com/r/DiJQQyiAyY?fbclid=IwAR2y7YoNuBf0l-LRQQ7WCTPQD4_B3NjuChDKYvJNp8hgaSrw3oZkDZP6iw0">https://forms.office.com/r/DiJQQyiAyY</a><br>(Link tham dự trực tuyến qua Zoom sẽ được gửi tới người đăng ký qua email sau khi hoàn thành form)</p>`}}></div> }



                    }

                </Modal.Body>

            </Modal>
            <div className="col">
                <div className="card">
                    <img src={scholarship_img} className="card-img-top" alt="..."/>
                        <div className="card-body w-178">
                            <h5 className="card-title" onClick={() => {handleShow(); setContent(1)}}>RA MẮT WEBSITE KÊNH THÔNG TIN HỌC BỔNG</h5>
                            {/*<p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>*/}
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={scholarship_img_1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => {handleShow(); setContent(2)}}>Chương trình Học bổng sau đại học tại nước ngoài của Tập đoàn Vingroup</h5>
                        {/*<p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>*/}
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={scholarship_img_2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => {handleShow(); setContent(3)}}>THÔNG BÁO CHƯƠNG TRÌNH HỌC BỔNG ĐỒNG HÀNH KỲ 42</h5>
                        {/*<p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>*/}
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={scholarship_img_3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => {handleShow(); setContent(3)}}>Quyết định về việc cấp học bổng Đỗ Quân lần thứ 9 (Học kỳ I năm học 2021-2022)</h5>
                        {/*<p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scholarship;

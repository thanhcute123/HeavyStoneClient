import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';


import "../HomeIntro/HomeIntro.css";

const HomIntro = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navs navbar-custom fixed-top nav-style">
                <div className="container px-5">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                                <button className="btn btn-color p-2 mb-2"><FontAwesomeIcon icon={faSignIn}/> Sign in</button>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="hero">
                <div className="background-image"></div>
                <div className="hero-content-area text-dark">
                    <h1>Heavystone</h1>

                    <h3>Hanoi University of Science, VNU</h3>
                    {/*<button className="btn btn-color p-2">Sign in</button>*/}
                    <a className="btn btn-color p-2 mb-2" href="#scroll">More</a>
                </div>
            </section>

            <section className="testimonials" id="scroll">
                <h3 className="title">Lịch sử phát triển</h3>
                <hr/>
                <h4>LỊCH SỬ VÀ CHẶNG ĐƯỜNG PHÁT TRIỂN CỦA TRƯỜNG ĐẠI HỌC TỔNG HỢP HÀ NỘI (1956-1995)</h4>
                <p className="quote">Năm 1954, sau ngày ký hiệp định Geneve, các cơ quan đầu não kháng chiến lần lượt trở về tiếp quản Thủ đô Hà Nội. Các trung tâm đại học ở các vùng kháng chiến lần lượt trở về Hà Nội cùng với một số cơ sở đại học được tiếp quản Thủ đô để lập thành bốn trường đại học: Đại học Văn Khoa, Đại học Khoa học, Đại học Sư phạm Văn khoa và Khoa học, Đại học Y - Dược.</p>
                <p className="quote">Miền Bắc được hoàn toàn giải phóng và bắt đầu sự nghiệp xây dựng CNXH. Trước yêu cầu phát triển khoa học cần có một nền giáo dục đại học phát triển, ngày 04/06/1956, Thủ tướng Chính phủ đã ký Quyết định số 2183/TC thành lập 15 trường trung học chuyên nghiệp và 5 trường đại học: Đại học Tổng hợp, Đại học Bách khoa, Đại học Sư phạm, Đại học Y - Dược, Đại học Nông - Lâm. Giáo sư Ngụy Như Kon Tum được bổ nhiệm làm Hiệu trưởng Trường Đại học Tổng hợp Hà Nội - Trường Đại học Khoa học cơ bản đầu tiên của nước Việt Nam Dân chủ Cộng hòa.</p>

                <hr/>
                <h4 className="sub-title">SỰ RA ĐỜI VÀ PHÁT TRIỂN CỦA TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN, ĐẠI HỌC QUỐC GIA HÀ NỘI (1995 - 2021)</h4>
                <p className="quote">Từ tháng 9 năm 1995, Trường Đại học Khoa học Tự nhiên chính thức đi vào hoạt động với tư cách là một trường đại học thành viên nòng cốt của Đại học Quốc gia Hà Nội.</p>
                <p className="quote">Với phương châm duy trì sự ổn định để phát triển, Đại hội Đảng bộ Trường Đại học Khoa học Tự nhiên lần thứ nhất vào tháng 12/1995 đã xác định mục tiêu của giai đoạn 1996 - 2000 là “Xây dựng và phát triển Trường Đại học Khoa học Tự nhiên thành một trường khoa học cơ bản và công nghệ có tiềm lực mạnh. Giữ vững và từng bước nâng cao chất lượng đào tạo, nghiên cứu khoa học, trở thành trường đầu đàn trong khối các trường khoa học cơ bản và côngnghệ trong cả nước; phục vụ thiết thực, hiệu quả công cuộc công nghiệp hóa, hiện đại hóa đất nước và sự nghiệp phát triển kinh tế, văn hóa, xã hội của Thủ đô Hà Nội”.</p>
                <p className="quote">Trong hơn hai năm hoàn thiện cơ cấu và phát triển trong hệ thống tổ chức mới, Trường Đại học Khoa học Tự nhiên đã tự khẳng định mình như là một thành viên chủ chốt của Đại học Quốc gia Hà Nội trong triển khai thực hiện nhiệm vụ xây dựng Đại học Quốc gia Hà Nội trở thành một trung tâm đào tạo đa ngành, đa lĩnh vực, chất lượng cao.</p>
                <p className="quote">Thời điểm này, việc định hướng công nghệ trong đào tạo và nghiên cứu khoa học được Nhà trường chú trọng. Các chương trình đào tạo công nghệ hóa học, công nghệ sinh học và sau này là công nghệ hạt nhân, công nghệ môi trường được triển khai thực hiện. Bên cạnh nghiên cứu cơ bản, các nhà khoa học đã có nhiều nghiên cứu có tính ứng dụng cao.</p>
                <p className="quote">Từng bước hiện đại hóa thiết bị máy móc phục vụ đào tạo và nghiên cứu khoa học, Nhà trường đã xây dựng nhiều dự án đầu tư trong các lĩnh vực như: hóa học dầu mỏ, hóa vật liệu, phòng thí nghiệm trọng điểm quốc gia, phân tích môi trường... nên điều kiện nghiên cứu khoa học, chất lượng nghiên cứu và khả năng công bố kết quả trên các tạp chí khoa học quốc tế có uy tín của Trường được tăng lên đáng kể. Số lượng đề tài nghiên cứu, số kinh phí thu được từ nghiên cứu khoa học, số công trình khoa học được công bố, số hội nghị, hội thảo khoa học quốc tế được tổ chức tại Trường đã được tăng rõ rệt hàng năm. Đây là tiền đề quan trọng cho những bứt phá về nghiên cứu khoa học ở giai đoạn tiếp theo.</p>
                <p className="quote">Năm 1997, Trường Đại học Khoa học Tự nhiên là đơn vị đầu tiên của cả nước đề xuất và triển khai đề án đào tạo Cử nhân Khoa học Tài năng. Chất lượng đào tạo của chương trình này đã được dư luận trong và ngoài nước đánh giá cao, ngang với các trường đại học tiên tiến của thế giới. Sự thành công của chương trình khẳng định: Tiên phong trong đào tạo chất lượng cao là truyền thống, là bản sắc văn hóa riêng của Trường Đại học Khoa học Tự nhiên.</p>
                <p className="quote">Với chất lượng đội ngũ cán bộ và truyền thống trên nửa thế kỷ xây dựng và phát triển, Trường phấn đấu xây dựng trở thành Trường Đại học nghiên cứu tiên tiến, góp phần tích cực vào sự nghiệp đổi mới giáo dục đào tạo và công cuộc công nghiệp hóa, hiện đại hóa đất nước.</p>
            </section>

            <section className="destinations">
                <h3 className="title">Hình ảnh</h3>
                <p>Một vòng quanh HUS</p>
                <hr/>

                    <ul className="grid">
                        <li className="small image-1"></li>
                        <li className="large image-2"></li>
                        <li className="large image-3"></li>
                        <li className="small image-4"></li>
                    </ul>
            </section>


            <div className="footer d-flex justify-content-center align-items-center bg-secondary p-2">
                <div>Copyright &copy; Heavystone 2022</div>
            </div>
        </div>
    )
}
export default HomIntro;

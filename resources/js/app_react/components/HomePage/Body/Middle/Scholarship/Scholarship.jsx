import React from "react";
import scholarship_img from "../../../../../img/Scholarship/avatar_elso.jpg";
import "../Scholarship/Scholarship.css";

const Scholarship = () => {
    return(
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
            <div className="col">
                <div className="card">
                    <img src={scholarship_img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Thông tin về Học bổng Vingroup chuyên ngành Toán - Tin Bảo mật tại ĐH Limoges</h5>
                            <p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={scholarship_img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Thông tin về Học bổng Vingroup chuyên ngành Toán - Tin Bảo mật tại ĐH Limoges</h5>
                        <p className="card-text">Trong năm học này, Vingroup sẽ tiếp tục cấp các suất học bổng Thạc sĩ toàn phần cho các sinh viên Việt Nam theo học tại Trường Đại học Limoges, Cộng hòa Pháp trong chuyên ngành Toán học, Mật mã, Lập trình và Ứng dụng (MCCA) và chuyên ngành An toàn thông tin (SI). </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scholarship;
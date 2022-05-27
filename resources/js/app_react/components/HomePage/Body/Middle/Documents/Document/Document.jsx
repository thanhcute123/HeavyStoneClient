import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import word from "../../../../../../img/extension/microsoft-word.png";
import pdf from "../../../../../../img/extension/pdf.png"
import "../Document/Document.css"

const Document = () => {

    return (
        <div>
            <div className="doc d-flex flex-column justify-content-center">
                <div className="doc-tag">
                    <ul className="d-flex">
                        <li className="doc-tag-item">#Tin học</li>
                        <li className="doc-tag-item">#Lập trình</li>
                    </ul>
                </div>
                <div className="doc-info ms-3 d-flex">
                    <img className="doc-image" src={pdf} width="30px" height="30px"/>
                    <div className="doc-title">
                        <a className="style-a" href="https://drive.google.com/file/d/1T1DoohEJ1ljHAtD0wkgKYNUwE6xG-x_y/view">Tài liệu lập trình JavaCore tiếng việt</a>
                    </div>
                    <div className="doc-download">
                        <FontAwesomeIcon icon={faFileDownload}/>
                    </div>
                </div>
            </div>
            <div className="doc d-flex flex-column justify-content-center">
                <div className="doc-tag">
                    <ul className="d-flex">
                        <li className="doc-tag-item">#Tin học</li>
                        <li className="doc-tag-item">#Lập trình</li>
                    </ul>
                </div>
                <div className="doc-info ms-3 d-flex">
                    <img className="doc-image" src={pdf} width="30px" height="30px"/>
                    <div className="doc-title">
                        <a className="style-a" href="https://drive.google.com/file/d/1ldxcb-Hje1us0gfLb_dencQJyC5GUAQA/view">Lập trình hướng đối tượng – ĐH Công nghệ, ĐHQGHN</a>
                    </div>
                    <div className="doc-download">
                        <FontAwesomeIcon icon={faFileDownload}/>
                    </div>
                </div>
            </div>
            <div className="doc d-flex flex-column justify-content-center">
                <div className="doc-tag">
                    <ul className="d-flex">
                        <li className="doc-tag-item">#Giáo trình</li>
                        <li className="doc-tag-item">#Tư tưởng</li>
                    </ul>
                </div>
                <div className="doc-info ms-3 d-flex">
                    <img className="doc-image" src={pdf} width="30px" height="30px"/>
                    <div className="doc-title">
                        <a className="style-a" href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2730/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20T%C6%B0%20t%C6%B0%E1%BB%9Fng%20HCM%20(C)%20Tr%20%C4%91%E1%BA%A7u-Tr70.pdf">Giáo trình tư tưởng Hồ Chí Minh cho khối không chuyên</a>
                    </div>
                    <div className="doc-download">
                        <FontAwesomeIcon icon={faFileDownload}/>
                    </div>
                </div>
            </div>
            <div className="doc d-flex flex-column justify-content-center">
                <div className="doc-tag">
                    <ul className="d-flex">
                        <li className="doc-tag-item">#Giáo trình</li>
                        <li className="doc-tag-item">#Tư tưởng</li>
                    </ul>
                </div>
                <div className="doc-info ms-3 d-flex">
                    <img className="doc-image" src={pdf} width="30px" height="30px"/>
                    <div className="doc-title">
                        <a className="style-a" href="https://tuongphuongtn.files.wordpress.com/2011/01/bai-giang-ptvp-nam-2010-moi_xuan.pdf">Giáo trình Phương trình vi phân</a>
                    </div>
                    <div className="doc-download">
                        <FontAwesomeIcon icon={faFileDownload}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Document;

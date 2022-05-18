import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import word from "../../../../../../img/extension/microsoft-word.png";
import "../Document/Document.css"
const Document = () => {
    return (
        <div className="doc d-flex flex-column justify-content-center">
            <div className="doc-tag">
                <ul className="d-flex">
                    <li className="doc-tag-item">#Toán</li>
                    <li className="doc-tag-item">#Toán học</li>
                    <li className="doc-tag-item">#Giải tích 1</li>
                </ul>
            </div>
            <div className="doc-info ms-3 d-flex">
                <img className="doc-image" src={word} width="30px" height="30px"/>
                <div className="doc-title">
                    <p>Tài liệu lập trình.docx</p>
                </div>
                <div className="doc-download">
                    <FontAwesomeIcon icon={faFileDownload}/>
                </div>
            </div>
        </div>
    )
}

export default Document;
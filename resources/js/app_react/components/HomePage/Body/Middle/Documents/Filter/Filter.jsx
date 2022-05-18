import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import "../Filter/Filter.css";

const Filter = () => {
    return (
        <div className="filter d-flex align-items-center">
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
            <div className="filter-option">
                <select>
                    <option>Ngành</option>
                </select>
            </div>
            <div className="filter-option">
                <select>
                    <option>Bộ môn</option>
                </select>
            </div>
            <div>
                <button className="filter-button" type="button"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </div>
    )
}

export default Filter;
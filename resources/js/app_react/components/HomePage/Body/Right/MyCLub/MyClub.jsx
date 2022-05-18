import React from "react";
import avt_clb from '../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png';
import './MyClub.css';

const MyClub = () => {
    return(
        <div>
            <div className="d-flex align-items-center w-100 mb-4 my-club">
                <div>
                    <img src={avt_clb} width="32px" className="rounded-3 me-2"/>
                </div>
                <div>
                    <div className="fw-bolder">Bóng đá</div>
                </div>
            </div>
        </div>

    )
}
export default MyClub;
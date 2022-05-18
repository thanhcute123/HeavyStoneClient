import React from "react";
import avt_user from "../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import exchange_content from "../../../../../../img/exchange_content/maxresdefault.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommenting, faHeart} from "@fortawesome/free-solid-svg-icons";
import CommentCLB from "../CommentCLB/CommentCLB";
import avt_clb from "../../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png";
const CombineClub = () => {
    return (
        <div>
            <div className="border shadow-sm mt-5 rounded-3">

                <div className="d-flex content">
                    <div>
                        <img src={avt_clb} width="40px" className="rounded-3 me-2"/>
                    </div>
                    <div>
                        <div className="usename-bold">Bóng đá</div>
                        <div className="text-muted time">Người tham gia nhóm</div>
                    </div>
                </div>
                <div className="content">
                    <div>Bài giảng đại chúng....</div>
                    {/*<div className="tags mt-3">*/}
                    {/*    <div className="border-color float-start  rounded-pill p-1 me-1 mb-2">#Toán-Cơ-tin học</div>*/}
                    {/*    <div className="border-color float-start rounded-pill p-1  me-1 mb-2">#Máy tính và khoa học thông tin</div>*/}

                    {/*</div>*/}

                </div>
                <div className="exchange-main mt-5">
                    <div>
                        <img className="exchange-image" src={exchange_content}/>
                    </div>
                </div>
                <div className="exchange-tim d-flex">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faHeart}/>

                    </div>

                    <div>
                        <FontAwesomeIcon className="icon" icon={faCommenting}/>
                    </div>
                </div>
                <CommentCLB/>
            </div>
        </div>
    )
}

export default CombineClub;
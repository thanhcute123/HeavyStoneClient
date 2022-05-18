import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommenting} from '@fortawesome/free-solid-svg-icons';
import avt_user from "../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import exchange_content from "../../../../../../img/exchange_content/maxresdefault.jpg";
import "./Posts.css";
import Comments from "./Comments/Comments";

const Posts = () => {
    return(
        <div>
            <div className="border shadow-sm mt-5 rounded-3">

                <div className="d-flex content">
                    <div>
                        <img className="rounded-circle" width="45px" src={avt_user}/>
                    </div>
                    <div>
                        <div className="usename-bold">Vũ Thu Thanh</div>
                        <div className="text-muted time">16/04/2022</div>
                    </div>
                </div>
                <div className="content">
                    <div>Bài giảng đại chúng....</div>
                    <div className="tags mt-3">
                        <div className="border-color float-start  rounded-pill p-1 me-1 mb-2">#Toán-Cơ-tin học</div>
                        <div className="border-color float-start rounded-pill p-1  me-1 mb-2">#Máy tính và khoa học thông tin</div>

                    </div>

                </div>
                <div className="exchange-main mt-5">
                    <div>
                        <img className="exchange-image" src={exchange_content}/>
                    </div>
                </div>
                <div className="exchange-tim d-flex">
                    <div>
                        <FontAwesomeIcon className="icon" icon={faHeart}/>
                        {/*<Icon className="icon" icon="akar-icons:heart" />*/}
                        {/*<Heart*/}
                        {/*    color={'#fff'}*/}
                        {/*    // width="250px"*/}
                        {/*    font-size="23px"*/}
                        {/*    border="1px solid black"*/}
                        {/*    onClick={() => alert('Hi!')}*/}
                        {/*/>*/}
                    </div>

                    <div>
                        <FontAwesomeIcon className="icon" icon={faCommenting}/>
                        {/*<Icon className="icon" icon="ant-design:comment-outlined" />*/}
                    </div>
                </div>
                <Comments/>
            </div>
        </div>
    )

}
export default Posts;
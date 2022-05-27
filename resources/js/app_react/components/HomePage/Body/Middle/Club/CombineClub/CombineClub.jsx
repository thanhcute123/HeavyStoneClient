import React from "react";
import avt_user from "../../../../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import exchange_content from "../../../../../../img/clb/127963270_2678662265778994_6666780307843302601_n.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommenting, faHeart} from "@fortawesome/free-solid-svg-icons";
import CommentCLB from "../CommentCLB/CommentCLB";
import avt_clb from "../../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png";
import $ from "jquery";
const CombineClub = () => {

    $(".loves").on('click', function () {
        var countNow = $(this).find("div").html().replace(',', '');
        if(!$(this).hasClass("active")) {
            $(this).find(".animated").remove();
            $(this).addClass("active");
            $(this).find("i").removeClass("ion-android-favorite-outline");
            $(this).find("i").addClass("ion-android-favorite");
            $(this).find("div").html(parseInt(countNow) + 1);
            $(this).find("div").html($.number($(this).find("div").html()));
            $(this).append($(this).find("i").clone().addClass("animated"));
            $(this).find("i.animated").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){
                $(this).remove();
                $(this).off(e);
            });
            // add some code ("love")
        }else{
            $(this).find(".animated").remove();
            $(this).removeClass("active");
            $(this).find("i").addClass("ion-android-favorite-outline");
            $(this).find("i").removeClass("ion-android-favorite");
            $(this).find("div").html(parseInt(countNow) - 1);
            $(this).find("div").html($.number($(this).find("div").html()));

            // add some code ("unlove")
        }
        return false;
    });
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
                    <div className="content_noti" dangerouslySetInnerHTML={{__html: `<p>[FINAL 2020]&nbsp;</p><p>Những hình ảnh của một chặng đường - Giải bóng đá nam trường ĐHKHTN</p><p>FC MIM với sự thay máu phần lớn những nhân tố chủ chốt trong đội hình cũ 2018 bằng những cầu thủ đầy hứa hẹn của lứa K65 mang làn gió mới tới giải. Hãy cùng dõi theo làn gió mới sẽ thay đổi trong tương lai.</p><p>Đội mang tới giải một tinh thần giao lưu học hỏi, những màn đá bóng đẹp mắt mãn nhãn người xem.</p><p>Tuy nhiên do nhiều yếu tố mà chúng ta chưa thể chạm tay tới mục đích ban đầu mà chỉ lọt vào top 4 đội mạnh nhất.</p><p>Hy vọng các lứa sau sẽ cố gắng viết tiếp những điều còn đang nuối tiếc..............[COMEBACK]</p>`}}>
                    </div>

                </div>
                <div className="exchange-main mt-5">
                    <div>
                        <img className="exchange-image" src={exchange_content}/>
                    </div>
                </div>
                <div className="exchange-tim d-flex w-100">
                    <div className="d-flex">

                        {/*<div><IonIcon id="love" className="love" icon={heartOutline} /></div><div>273</div>*/}
                        <div className="love loves me-2"><i className="ion-android-favorite-outline"></i>
                            <div>273</div>
                        </div>
                    </div>


                    <div className="d-flex">

                        {/*<div><IonIcon className="love" icon={chatbubbleEllipsesOutline} /></div><div>14</div>*/}
                        <div className="love"><i className="ion-ios-chatbubble-outline"></i>
                            <div>273</div>
                        </div>
                    </div>
                </div>
                <CommentCLB/>
            </div>
        </div>
    )
}

export default CombineClub;

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
                        <div className="usename-bold">B??ng ????</div>
                        <div className="text-muted time">Ng?????i tham gia nh??m</div>
                    </div>
                </div>
                <div className="content">
                    <div className="content_noti" dangerouslySetInnerHTML={{__html: `<p>[FINAL 2020]&nbsp;</p><p>Nh???ng h??nh ???nh c???a m???t ch???ng ???????ng - Gi???i b??ng ???? nam tr?????ng ??HKHTN</p><p>FC MIM v???i s??? thay m??u ph???n l???n nh???ng nh??n t??? ch??? ch???t trong ?????i h??nh c?? 2018 b???ng nh???ng c???u th??? ?????y h???a h???n c???a l???a K65 mang l??n gi?? m???i t???i gi???i. H??y c??ng d??i theo l??n gi?? m???i s??? thay ?????i trong t????ng lai.</p><p>?????i mang t???i gi???i m???t tinh th???n giao l??u h???c h???i, nh???ng m??n ???? b??ng ?????p m???t m??n nh??n ng?????i xem.</p><p>Tuy nhi??n do nhi???u y???u t??? m?? ch??ng ta ch??a th??? ch???m tay t???i m???c ????ch ban ?????u m?? ch??? l???t v??o top 4 ?????i m???nh nh???t.</p><p>Hy v???ng c??c l???a sau s??? c??? g???ng vi???t ti???p nh???ng ??i???u c??n ??ang nu???i ti???c..............[COMEBACK]</p>`}}>
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

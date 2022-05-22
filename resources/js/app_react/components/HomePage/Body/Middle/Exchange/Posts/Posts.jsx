import React, {useState, useEffect}  from "react";
import axios from "axios";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommenting} from '@fortawesome/free-solid-svg-icons';
import {heartOutline, chatbubbleEllipsesOutline} from "ionicons/icons";
import {IonIcon} from '@ionic/react';
import "../../../../../../../../../public/ionicons/css/ionicons.min.css";
import avt_user from "../../../../../../img/extension/undraw_profile.svg";
import exchange_content from "../../../../../../img/exchange_content/maxresdefault.jpg";
import "./Posts.css";
import Comments from "./Comments/Comments";
import moment from "moment";

const Posts = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataPost, setDataPost] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getDataPost = () => {
        axios.get("http://127.0.0.1:8000/api/post/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataPost----", result);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let tags;
                    for (let i in result) {
                        // console.log(result.data[i])
                        tags = JSON.parse(result[i].tags);
                        console.log("tags----",tags);
                        console.log(result[i].created_at);

                        let date = moment(result[i].created_at);
                        let dateComponent = date.utc().format('YYYY-MM-DD');
                        let timeComponent = date.utc().format('HH:mm:ss');
                        let time = dateComponent + " " + timeComponent;

                        rows.push({
                            id: result[i].id,
                            id_user: result[i].id_user,
                            theme: result[i].theme,
                            content: result[i].content,
                            faculty: tags.faculty,
                            major: tags.major,
                            created_at: time
                        });
                    }
                    setDataPost(rows);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const getDataUser = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8000/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setDataUser(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const love = function() {
        // alert("hello");
        $(".love").each(function(){
            $(this).find("div").html($.number($(this).find("div").html()));
            $(".love").on('click', function () {
            // $(this).click(function(){
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
        });
    }

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


    useEffect(() => {
        getDataPost();
        getDataUser();
        // love()

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>


                {dataPost.map((post, idx) => (
                    <div key={idx} className="border shadow-sm mt-5 rounded-3">

                        {dataUser.map((user, idx) =>(
                            user.id_user === post.id_user &&
                            <div className="d-flex content">

                                <div>
                                    <img className="rounded-circle me-2" width="38px" src={avt_user}/>
                                </div>
                                <div>
                                    <div className="usename-bold">{user.username}</div>
                                    <div className="text-muted time">{post.created_at}</div>
                                </div>
                            </div>
                        ))}

                        <div className="content">
                            <h6>{post.theme}</h6>
                            <div>{post.content}</div>
                            <div className="tags mt-3">
                                <div className="border-color float-start  rounded-pill p-1 me-1 mb-2">#{post.faculty}</div>
                                <div className="border-color float-start rounded-pill p-1  me-1 mb-2">#{post.major}</div>
                            </div>

                        </div>
                        <div className="exchange-main mt-5">
                            <div>
                                {/*<img className="exchange-image" src={exchange_content}/>*/}
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
                                    <div>14</div>
                                </div>
                            </div>
                        </div>
                        <Comments idPost={post.id}/>
                    </div>
                ))}

            </div>
        )
    }


}
export default Posts;

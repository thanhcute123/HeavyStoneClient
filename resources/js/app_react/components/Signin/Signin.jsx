import React, {useState} from "react";
import axios from "axios";
import signin_login from '../../img/Logo/1.png';
import signin_text from '../../img/Logo/2.png';
import {useNavigate} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import "./Signin.css";
import {Link} from "react-router-dom";


const Signin = () => {
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();
    const [formSignin, setFormSignin] = useState({
        email: "",
        password: ""
    });

    const  updateField = (e, key) => {
        formSignin[key] = e.target.value;
        setFormSignin({...formSignin});
        console.log(formSignin);
    }

    const adminSignin = () => {
        const dataSigin = formSignin;
        console.log("dataSigin---", formSignin);
        axios.post(`http://127.0.0.1:8080/api/user/login`,{
            email: formSignin.email,
            password: formSignin.password
        })
            .then(res => {
                // let user;
                console.log("res----", res.data.data)
                // localStorage.setItem("users",res.data.data);
                // user = res.data.data.id_user;
                sessionStorage.setItem("user_login", JSON.stringify(res.data.data));
                const resetForm = {
                    email: "",
                    password: ""
                }

                setFormSignin(resetForm);

            })
            .catch(function (error) {
                return new Promise((done) => {
                    if (error.response) {
                        console.log("errrro---", error.response.data.error);
                        setErrors(error.response.data.error);
                        if(done)
                            done(errors)
                        console.log("thenError---", errors);

                    } else if (error.request) {

                        console.log(error.request);
                    } else {

                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })


            })




    }
    const handleSubmit = (e) => {
        e.preventDefault()
        adminSignin();
        navigate('/home');
        window.location.reload();
    }
    return (
        <div className="w-100 d-flex justify-content-center align-items-center signin">
            <div className="col-lg-7 d-flex justify-content-center align-items-center shadow-lg ms-auto me-auto p-5 bg">
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <div className="signin-left col-lg-6 d-flex justify-content-center align-items-center flex-column">
                        <div className="signin-logo">
                            <img className="rounded-3" src={signin_login} width="125px" height="125px"/>
                        </div>
                        <div className="signin-text mt-3">
                            <img className="signin-img" src={signin_text}/>
                        </div>

                    </div>
                    <div className="signin-right col-lg-6 d-flex align-items-center justify-content-center flex-column">
                        <h2>Sign in</h2>
                        <form className="signin-form">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input value={formSignin.email} type="text" className="form-control" id="username" onChange={(e) => {
                                    updateField(e, 'email')
                                }}/>
                                {errors.email && <div className="error-msg">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input value={formSignin.password} type="password" className="form-control" id="password" onChange={(e) => {
                                    updateField(e, 'password')
                                }}/>
                                {errors.password && <div className="error-msg">{errors.password}</div>}
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="check"/>
                                <label className="form-check-label">Remember me!</label>
                            </div>
                            <Link to="/home">
                                <button type="submit" className="signin-button rounded-3" onClick={handleSubmit}>Zô</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <div id="calltrap-btn" className="b-calltrap-btn calltrap_offline hidden-phone visible-tablet"
                 onClick={() => setOpen(!open)}
                 aria-expanded={open}>
                {/*<img src={chatlogo} width="40px"/>*/}
                <div id="calltrap-ico"></div>
            </div>

            <div style={{minHeight: '150px'}}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{width: '330px'}}>
                            {/*Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                            {/*terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer*/}
                            {/*labore wes anderson cred nesciunt sapiente ea proident.*/}
                            <div className="w-100">

                                <div className="box box-primary direct-chat direct-chat-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title"> Chat</h3>
                                    </div>

                                    <div className="box-body">

                                        <div className="direct-chat-messages">

                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-left">Admin</span>
                                                    <span
                                                        className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                                </div>

                                                <img className="direct-chat-img"
                                                     src="https://bootdey.com/img/Content/user_1.jpg"
                                                     alt="Message User Image"/>
                                                <div className="direct-chat-text">
                                                    Bạn cần chúng tôi hỗ trợ gì nào?
                                                </div>

                                            </div>
                                            <div className="direct-chat-msg rights">
                                                <div className="direct-chat-info clearfix">
                                                    {/*<span className="direct-chat-name pull-right">Vũ Thu Thanh</span>*/}
                                                    <span
                                                        className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                                </div>

                                                <img className="direct-chat-img"
                                                     src="https://bootdey.com/img/Content/user_2.jpg"
                                                     alt="Message User Image"/>
                                                <div className="direct-chat-text client-side-chat">
                                                    Tôi cần lấy lại mật khẩu
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                    <div className="box-footer">

                                            <div className="comment-border rounded-pill">
                                                <form className="d-flex align-items-center">
                                                    <textarea className="comment-input " rows="1" placeholder="Nhập nội dung tin nhắn"/>
                                                    <button className="comment-button" type="button"><FontAwesomeIcon icon={faPaperPlane}/></button>
                                                </form>

                                            </div>

                                    </div>

                                </div>

                            </div>
                        </Card>
                    </div>
                </Collapse>
            </div>
            {/*<a id="calltrap-btn" className="b-calltrap-btn calltrap_offline hidden-phone visible-tablet"*/}
            {/*   href="tel:0936307069">*/}
            {/*    <div id="calltrap-ico"></div>*/}
            {/*</a>*/}


        </div>
)
}
export default Signin;

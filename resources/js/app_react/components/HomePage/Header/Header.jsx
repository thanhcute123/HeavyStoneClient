import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import {Button, Dropdown} from "react-bootstrap";
import logo_text from "../../../img/Logo/2.png";
import avt_user from "../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import "./Head.css";

const Header = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    let session = JSON.parse(sessionStorage.getItem('user_login'));
    console.log("user_login----",session.id_user);
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    const SignOut = () => {
        sessionStorage.removeItem('user_login');
        navigate('/signin');
        window.location.reload();
    }

    const getDataUserApi = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("datauser----", result);
                    setIsLoaded(true);
                    setUsers(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getDataUserApi();

    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="header d-flex justify-content-around align-items-center border border-bottom p-1">
                <div className="header-logo">
                    <img src={logo_text} width="170px"/>
                </div>
                <div className="header-search">
                    <form className="d-flex justify-content-center align-items-center">
                        <input className="header-input rounded-pill" type="search" placeholder="Search" size="40"/>
                        <button className="header-btn-search" type="button"><FontAwesomeIcon icon={faSearch}/></button>
                    </form>

                </div>
                <div className="header-user d-flex justify-content-center align-items-center">

                    <div>
                        {
                        users.map((user, idx) => (
                        user.id_user === session.id_user && user.avatar !== null && <img src={user.avatar.slice(6)} className="rounded-circle" width="35px"/> ||
                        user.id_user === session.id_user && user.avatar === null && <img src={avt_user} className="rounded-circle" width="35px" />

                        ))}
                        {/*<img src={avt_user} className="rounded-circle" width="45px" height="45px"/>*/}
                    </div>
                    <div className="user-name d-flex justify-content-center align-items-center ms-2">
                        {users.map((user, idx) => (
                            user.id_user == session.id_user &&
                            <div key={idx} className="usename-bold">
                                {user.username}
                            </div>
                        ))}

                    </div>
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown" id="dropdown-basic">

                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/home/profile"><FontAwesomeIcon className="text-muted me-2" icon={faUser}/> Profile</Dropdown.Item>
                            <Dropdown.Item href="" onClick={SignOut}><FontAwesomeIcon className="text-muted me-2" icon={faSignOut}/> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

            </div>
        )

    }


}
export default Header;

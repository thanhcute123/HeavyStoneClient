import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import {Button, Dropdown} from "react-bootstrap";
import logo_text from "../../../img/Logo/2.png";
import avt_user from "../../../img/Logo/212d12e421963f8a66f95aece1182069.jpg";
import "./Head.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import logo_message from "../../../img/Logo/c9b1f3f60a6dc4339d7c.jpg";

const Header = () => {
    const [open, setOpen] = useState(false);
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
                    <img src={avt_user} className="rounded-circle" width="45px" height="45px"/>
                </div>
                <div className="user-name d-flex justify-content-center align-items-center ms-2">
                    <div className="usename-bold">
                        Vũ Thu Thanh
                    </div>
                </div>
                <Dropdown>
                    <Dropdown.Toggle className="dropdown" id="dropdown-basic">

                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href=""><FontAwesomeIcon className="text-muted me-2" icon={faUser}/> Profile</Dropdown.Item>
                        <Dropdown.Item href=""><FontAwesomeIcon className="text-muted me-2" icon={faSignOut}/> Logout</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

            </div>

        </div>
)

}
export default Header;
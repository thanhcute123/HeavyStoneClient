import React, { useState } from "react";
// import Collapse from 'react-bootstrap/Collapse';
// import {Button} from "react-bootstrap";
import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";
// import {Button} from "react-bootstrap";
// import logo_message from "../../../img/Logo/c9b1f3f60a6dc4339d7c.jpg";
import "./Body.css";



const Body = () => {
    // const [open, setOpen] = useState(false);
    return(
        <div className="d-flex">
            <Left/>
            <Middle/>
            <Right/>
            {/*<div className="message">*/}

            {/*    <Button className="bg-white button-mess border-white"*/}
            {/*            onClick={() => setOpen(!open)}*/}
            {/*            aria-controls="example-collapse-text"*/}
            {/*            aria-expanded={open}*/}
            {/*    >*/}
            {/*        <img className="ms-3" src={logo_message} width="35px"/>*/}
            {/*    </Button>*/}
            {/*    <Collapse in={open}>*/}
            {/*        <div id="example-collapse-text">*/}
            {/*            a*/}
            {/*        </div>*/}
            {/*    </Collapse>*/}

            {/*</div>*/}
        </div>

    )

}
export default Body;
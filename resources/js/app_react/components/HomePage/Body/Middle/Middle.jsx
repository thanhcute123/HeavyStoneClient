import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import Tag from "./Tags/Tag";
import Introduction from "./Introduction/Introduction";
import Documents from "./Documents/Documents";
import Exchange from "./Exchange/Exchange";
import Scholarship from "./Scholarship/Scholarship";
import Club from "./Club/Club";
import HomePage from "../../HomePage";

const Middle = () => {
    return (
        <div className="flex-column d-flex col-lg-7 mt-5">
            <Tag/>
            <Outlet />
        </div>
    )
}
export default Middle

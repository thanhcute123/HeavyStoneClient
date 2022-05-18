import React from "react";
import { Routes, Route} from "react-router-dom";
import Tag from "./Tags/Tag";
import Introduction from "./Introduction/Introduction";
import Documents from "./Documents/Documents";
import Exchange from "./Exchange/Exchange";
import Scholarship from "./Scholarship/Scholarship";
import Club from "./Club/Club";

const Middle = () => {
    return (
        <div className="flex-column d-flex col-lg-7 mt-5">
            <Tag/>
            <Routes>
                <Route path="/" element={<Exchange />} />
                <Route path="/docs" element={<Documents />} />
                <Route path="/scholarship" element={<Scholarship />} />
                <Route path="/club" element={<Club />} />
            </Routes>
            {/*<Introduction/>*/}
            {/*<Documents/>*/}
            {/*<Exchange/>*/}
            {/*<Scholarship/>*/}
            {/*<Club/>*/}
        </div>
    )
}
export default Middle
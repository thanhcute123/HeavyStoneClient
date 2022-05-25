import React from "react";
import { NavLink } from "react-router-dom";
import "../Tags/Tags.css";

const Tag = () => {
    return (
        <div className="d-flex justify-content-center align-content-center mt-4 border-bottom p-2">
            <NavLink className="link" to="">
                <div className="tag-button tag-three">
                    <div className="link">
                        #Trao đổi
                    </div>
                </div>
            </NavLink>
            <NavLink className="link" to="docs">
                <div className="tag-button tag-two">
                    <div className="link">
                        #Tài liệu
                    </div>
                </div>
            </NavLink>

            <NavLink className="link" to="scholarship">
                <div className="tag-button tag-four">
                    <div className="link">
                        #Học bổng
                    </div>
                </div>
            </NavLink>
            <NavLink className="link" to="club">
                <div className="tag-button tag-five">
                    <div className="link">
                        #Câu lạc bộ
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default Tag;

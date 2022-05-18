import React from "react";
import SeparateClubUpPost from "./SeparateClubUpPost/SeparateClubUpPost";
import avt_clb from "../../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png";
import SeparateClubPosts from "./SeparateClubPosts/SeparateClubPosts";
const SeparateClub = () => {
  return (
      <div>
          <div className="d-flex align-items-center w-100 mb-4 my-club mt-4">
              <div>
                  <img src={avt_clb} width="50px" className="rounded-3 me-2"/>
              </div>
              <div>
                  <h2 className="fw-lighter">Bóng đá</h2>
              </div>
          </div>
          <SeparateClubUpPost/>
          <SeparateClubPosts/>
      </div>
  )
}
export default SeparateClub;
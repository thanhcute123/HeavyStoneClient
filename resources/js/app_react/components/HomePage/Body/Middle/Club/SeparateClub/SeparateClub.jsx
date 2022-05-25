import React, {useState} from "react";
import SeparateClubUpPost from "./SeparateClubUpPost/SeparateClubUpPost";
import avt_clb from "../../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png";
import SeparateClubPosts from "./SeparateClubPosts/SeparateClubPosts";
import {Button, Modal} from "react-bootstrap";

const SeparateClub = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (


      <div>
          <form
              onSubmit={(ev) => {

              }}
          >
              <Modal show={show} onHide={handleClose}
                     aria-labelledby="contained-modal-title-vcenter"
                     centered
              >
                  <Modal.Header>
                      <Modal.Title>
                          <div className="">Thêm thành viên</div>
                      </Modal.Title>
                  </Modal.Header>
                  <div className="d-flex justify-content-around">
                      <div className="w-100 border-end">

                          <Modal.Body>

                              <div className="w-100">
                                  <div>
                                      <div className="form-group">
                                          <label>Id</label>
                                          <input type="text" className="form-control title" onChange={(e) => {

                                          }}/>
                                      </div>
                                  </div>
                              </div>

                          </Modal.Body>
                          <Modal.Footer>
                              {/*<Button className="btn-secondary" onClick={handleClose}>Hủy</Button>*/}
                              {/*<Button type="submit" className=" button-uppost" onClick={handleClose}>*/}
                              {/*    Add*/}
                              {/*</Button>*/}
                              <div>
                                  <button type="button" className="btn btn-secondary"  data-dismiss="modal" onClick={handleClose}>Hủy bỏ</button>
                              </div>

                              <div>
                                  <button type="submit" className="btn btn-primary" onClick={(e) => { handleClose()}}>Ghi lại</button>
                              </div>
                          </Modal.Footer>
                      </div>


                  </div>


              </Modal>
          </form>
          <div className="d-flex align-items-center w-100 mb-4 my-club mt-4">
              <div className="col-1">
                  <img src={avt_clb} width="50px" className="rounded-3 me-2"/>
              </div>
              <div className="col-8">
                  <h2 className="fw-lighter">Bóng đá</h2>
              </div>
              <div className="col-3">
                  <button className="signin-button" onClick={handleShow}>+Thêm thành viên</button>
              </div>

          </div>
          <SeparateClubUpPost/>
          <SeparateClubPosts/>
      </div>
  )
}
export default SeparateClub;

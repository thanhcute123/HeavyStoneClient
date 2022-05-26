import React, {useState, useEffect, useContext} from "react";
import SeparateClubUpPost from "./SeparateClubUpPost/SeparateClubUpPost";
import avt_clb from "../../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png";
import SeparateClubPosts from "./SeparateClubPosts/SeparateClubPosts";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {PageClb} from "../../../../../Store/ContextPageClb";


const SeparateClub = () => {
    let id;
    let clubs = [];
    const [show, setShow] = useState(false);
    const context = useContext(PageClb);
    console.log("aaa---", context.id_clb);
    let session = JSON.parse(sessionStorage.getItem('user_login'));
    const [Clubs, setClubs] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [add_id_user, setAdd_id_user] = useState({
        id_user: ""
    });

    const  update_id_user = (e, key) => {
        add_id_user[key] = e.target.value;
        setAdd_id_user({...add_id_user});
        console.log(add_id_user);
    }


    const getDataClb = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/club/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataCLb----", result);
                    setIsLoaded(true);
                    setClubs(result);

                    // console.log("items---", items);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    // const getDataUser = () => {
    //     axios.get("http://127.0.0.1:8080/api/user/getAll")
    //         .then(res => res.data)
    //         .then(
    //             (result) => {
    //                 // console.log("dataMyClub----", result);
    //                 // this.dataPost = result.data
    //                 setIsLoaded(true);
    //                 let rows = [];
    //                 let myClub = [];
    //
    //                 for (let i in result) {
    //                     // console.log(result.data[i])
    //                     if(result[i].id_user === add_id_user) {
    //                         // console.log("tttttt----", result[i].club);
    //                         myClub = result[i].club.split(",")
    //                         // console.log("tagsR----",myClub);
    //                         rows.push({
    //                             id_user: result[i].id_user,
    //                             username: result[i].username,
    //                             sex: result[i].sex,
    //                             phone: result[i].phone,
    //                             id_department: result[i].id_department,
    //                             avatar: result[i].avatar,
    //                             club: myClub
    //                         });
    //
    //                     }
    //
    //                 }
    //                 setDataUser(rows);
    //                 // console.log("Clubssss---", dataUser);
    //             },
    //
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }
    const getDataUsers = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    // console.log("datauser----", result);
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


    const doUpdateUser = () => {
        const postData = Number(add_id_user.id_user)
        console.log("postData---", add_id_user);

        let flag = false;
        for (const i in users) {
            if(users[i].id_user === postData) {
                console.log("pppp----", users[i].club)

                id = users[i].id
                if(users[i].club !== null) {
                    clubs = users[i].club.split(",");
                    for (const j in clubs) {
                        if(clubs[j] === context.id_clb) {
                           flag = true
                        }
                    }
                    if(flag === true) {
                        console.log("User đã là thành viên của câu lạc bộ")
                    }else{
                        clubs.push(context.id_clb)
                    }
                }else {
                    clubs.push(context.id_clb)
                }


            }

        }
                console.log("clusssss---", clubs.toString())
                axios.put(`http://127.0.0.1:8080/api/user/update/${id}`,{
                    club: clubs.toString()
                })
                    .then(res => {
                        const resetModal = {
                            id_user: ""
                        }
                        setAdd_id_user(resetModal)
                        // getDataUsers()
                    })




    }
    const handleSubmit = (e) => {
      e.preventDefault();
      doUpdateUser();

    }

    useEffect(() => {
        getDataClb();
        // getDataUser();
        getDataUsers()
        // update_id_user()
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (


            <div>


                    <form
                        onSubmit={(ev) => {
                                handleSubmit(e)
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
                                                    <input value={add_id_user.id_user} type="text" className="form-control title" onChange={(e) => {
                                                        update_id_user(e, 'id_user');
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
                                            <button type="submit" className="btn btn-primary" onClick={(e) => {handleSubmit(e) }}>Ghi lại</button>
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
                        {Clubs.map(club => (
                            club.club_code === context.id_clb &&
                            <h2 className="fw-lighter">{club.club_name}</h2>
                        ))}
                    </div>
                    <div className="col-3">
                        {Clubs.map(club => (
                            club.id_user === session.id_user &&
                            <button className="signin-button" onClick={handleShow}>+Thêm thành viên</button>

                        ))}
                    </div>

                </div>


                <SeparateClubUpPost/>
                <SeparateClubPosts/>
            </div>
        )
    }

}
export default SeparateClub;

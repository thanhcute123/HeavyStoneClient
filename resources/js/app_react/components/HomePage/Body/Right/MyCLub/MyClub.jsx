import React, {useState, useEffect} from "react";
import avt_clb from '../../../../../img/clb/247417209_4184310981669695_2295114573500917550_n.png';
import './MyClub.css';
import axios from "axios";

const MyClub = () => {
    const [Clubs, setClubs] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getDataUser = () => {
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    console.log("dataMyClub----", result);
                    // this.dataPost = result.data
                    setIsLoaded(true);
                    let rows = [];
                    let myClub = [];

                    for (let i in result) {
                        // console.log(result.data[i])
                        if(result[i].id_user === 18001198) {
                            console.log("tttttt----", result[i].club);
                            myClub = result[i].club.split(",")
                            console.log("tagsR----",myClub);
                            rows.push({
                                id_user: result[i].id_user,
                                username: result[i].username,
                                sex: result[i].sex,
                                phone: result[i].phone,
                                id_department: result[i].id_department,
                                club: myClub
                            });

                        }

                    }
                    setDataUser(rows);
                    console.log("Clubssss---", dataUser);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
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

    useEffect(() => {
        getDataUser();
        getDataClb();
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>


                        {
                            dataUser.map(d => (
                                d.club.map((e,idx) => (
                                   Clubs.map((c) => (
                                      e == c.club_code &&
                                      <div className="d-flex align-items-center w-100 mb-4 my-club">
                                              <div>
                                                  <img src={avt_clb} width="32px" className="rounded-3 me-2"/>
                                              </div>
                                           <div>
                                               <div className="fw-bolder">{c.club_name}</div>
                                           </div>
                                      </div>
                                   ))
                                ))

                            ))

                       }


            </div>
        )
    }

}
export default MyClub;

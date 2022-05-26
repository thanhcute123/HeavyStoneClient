import React, {useEffect, useState, useContext} from "react";
import { Routes, Route } from "react-router-dom";
import CombineClub from "./CombineClub/CombineClub";
import SeparateClub from "./SeparateClub/SeparateClub";
import NonClub from "./NonClub/NonClub";
import {PageClb} from "../../../../Store/ContextPageClb";
import axios from "axios";

const Club = () => {
    let session = JSON.parse(sessionStorage.getItem('user_login'));
    const context = useContext(PageClb);
    console.log('page_1---', context.page);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getDataUser = () => {
        setIsLoaded(true);
        axios.get("http://127.0.0.1:8080/api/user/getAll")
            .then(res => res.data)
            .then(
                (result) => {
                    // console.log("datauser----", result);
                    setIsLoaded(true);
                    setDataUser(result);

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

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return(
            <div>
                {dataUser.map(user => (
                    user.id_user === session.id_user && user.club !== null && context.page == 0 && <CombineClub/> ||
                    user.id_user === session.id_user && user.club !== null && context.page == 1 && <SeparateClub/> ||
                    user.id_user === session.id_user && user.club === null && <NonClub/>
                ))}


            </div>
        )
    }

}

export default Club;

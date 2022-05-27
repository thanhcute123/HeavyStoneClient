import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import "../Filter/Filter.css";
import axios from "axios";

const Filter = () => {

    const [faculty, setFaculty] = useState([]);
    const [majors, setMajors] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [id_faculty, setId_Faculty] = useState('')

    const set_Id_Faculty = (e) => {
        setId_Faculty(e.target.value);
        console.log("id---", id_faculty);
    }

    const getDataMajors = () => {
        axios.get("http://127.0.0.1:8080/api/major/getAll")
            .then(res => res.data)
            .then(
                (result) => {

                    setIsLoaded(true);
                    setMajors(result);

                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const getDataFaculty = () => {
        axios.get("http://127.0.0.1:8080/api/department/getAll")
            .then(res => res.data)
            .then(
                (result) => {

                    setIsLoaded(true);
                    setFaculty(result);

                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getDataFaculty();
        getDataMajors();
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

    }
    return (
        <div className="filter d-flex align-items-center">
            <div className="filter-option">
                <select className="form-control" aria-label="Default select example" onChange={(e) => {
                    set_Id_Faculty(e)

                }}>
                    <option selected>Khoa</option>
                    {faculty.map(faculty => (
                        <option value={faculty.id_department}>{faculty.name_department}</option>
                    ))}


                </select>
            </div>
            <div className="filter-option">
                <select className="form-control" aria-label="Default select example" onChange={(e) => {

                }}>
                    <option>Ngành</option>
                    {majors.map((major, idx) => (
                        major.id_department === id_faculty &&
                        <option key={idx} value={major.major}>{major.major}</option>
                    ))}

                </select>
            </div>

            <div>
                <button className="filter-button" type="button"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </div>
    )
}

export default Filter;

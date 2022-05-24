import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomIntro from "./HomeIntro/HomIntro";
import Signin from "./Signin/Signin";
import Profile from "./HomePage/Body/Middle/Profile/Profile";
import HomePage from "./HomePage/HomePage";
import Exchange from "./HomePage/Body/Middle/Exchange/Exchange";
import Documents from "./HomePage/Body/Middle/Documents/Documents";
import Scholarship from "./HomePage/Body/Middle/Scholarship/Scholarship";
import Club from "./HomePage/Body/Middle/Club/Club";

function App( props ){

    let user_login = sessionStorage.getItem('user_login')

    return (
        <div className="AppComponent post" id="Application">
            <Routes>
                <Route path="/" element={ <HomIntro /> }/>
                {!user_login ?
                    // <Route path="/" element={ <HomIntro /> }/> &&
                    <Route path="/signin" element={<Signin />} /> :
                    <Route path="/home" element={<HomePage/>}>
                        <Route path="" element={<Exchange/>}/>
                        <Route path="docs" element={<Documents/>}/>
                        <Route path="scholarship" element={<Scholarship/>}/>
                        <Route path="club" element={<Club/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    </Route>
                }
            </Routes>
        </div>
    )
}

export default App

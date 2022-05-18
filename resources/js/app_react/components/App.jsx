import React from 'react'
import HomIntro from "./HomeIntro/HomIntro";
import Signin from "./Signin/Signin";
import Profile from "./Profile/Profile";
import HomePage from "./HomePage/HomePage";

function App( props ){

    return (
        <div className="AppComponent post" id="Application">
            {/*<BrowserRouter basename={CONFIG.WEB.USER_POST}>*/}

            {/*    <Switch>*/}
            {/*        <Route exact path="/" component={ HomePage } />*/}
            {/*        <Route path="/profile" component={ ProfilePage } />*/}
            {/*        <Route path="/about" component={ AboutPage } />*/}
            {/*    </Switch>*/}
            {/*</BrowserRouter>*/}
            {/*<HomIntro/>*/}
            {/*<Signin/>*/}
            {/*<Profile/>*/}
            <HomePage/>
        </div>
    )
}

export default App

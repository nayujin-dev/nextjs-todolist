import React from "react";
import {HashRouter as Router,Route,Switch}from "react-router-dom";
import Home from "../pages/Home";
// import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter= ({ refreshUser, isLoggedIn, userObj }) => {
    return(
        <Router>
            {isLoggedIn&&<Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <div
                    style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                    <Route exact path="/" element={<Home/>}>
                        <Home userObj={userObj} />
                    </Route>
                    <Route exact path="/Profile" element={<Profile/>}>
                        <Profile userObj={userObj} refreshUser={refreshUser} />
                    </Route>
                </div>
                ) : (
                <>
                    <Route exact path="/" element={<Auth/>}>
                        <Auth />
                    </Route>
                </>
                )}
            </Switch>
        </Router>
    );
};
export default AppRouter;
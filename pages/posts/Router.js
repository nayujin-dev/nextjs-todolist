import React from "react";
import {HashRouter as Router,Route,Switch}from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth"


const AppRouter= ({ refreshUser, isLoggedIn, userObj }) => {
    return(
        <Router>
            {isLoggedIn }
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
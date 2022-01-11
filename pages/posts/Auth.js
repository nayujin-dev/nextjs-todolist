import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { authService, firebaseInstance } from "../_app";
import AuthForm from "./AuthForm";

const Auth= () => {
    const onSocialClick=async(event)=>{
        //아래는 ES6에 관련된것
        const {
            target : {name}, 
        }= event;
        let provider;
        if(name==="google"){
            provider=new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name==="github"){
            provider=new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faCalendarCheck}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <AuthForm />
        </div>
    );
};

export default Auth;
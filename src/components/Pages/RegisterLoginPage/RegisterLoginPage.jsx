import React from "react";
import RegisterForm from "../RegisterLoginPage/RegisterForm"
import LoginForm from "../RegisterLoginPage/LoginForm"
import Logo from "../RegisterLoginPage/Logo"
import "../../../style.css"

const RegisterLoginPage = () => {
    return (
        <div className="container-fluid custom-bg-color">
            <div className="row align-items-center">
                <Logo />
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterLoginPage;
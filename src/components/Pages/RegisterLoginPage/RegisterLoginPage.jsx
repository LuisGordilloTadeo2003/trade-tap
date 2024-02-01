import React from "react";
import RegisterForm from "../RegisterLoginPage/RegisterForm"
import LoginForm from "../RegisterLoginPage/LoginForm"
import Logo from "../RegisterLoginPage/Logo"

const RegisterLoginPage = () => {
    const path = window.location.pathname;

    console.log(path)

    return (
        <div className="container-fluid custom-bg-color">
            <div className="row align-items-center">
                <Logo />
                {
                    path === "/login"
                        ? <LoginForm />
                        : path === "/register"
                            ? <RegisterForm />
                            : null
                }
            </div>
        </div>
    );
}

export default RegisterLoginPage;
// Importa React y estilos de Bootstrap
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    return (
        <div className="col-md-5 p-5 d-flex align-items-center justify-content-center vh-100 border-custom-registerLogin">
            <form className='pl-3 row g-3 justify-content-center'>
                <h2 className="text-center mb-4 text-white">Sign in</h2>
                <div className="col-md-7">
                    <label className='form-label text-white'>Username *</label>
                    <input type="text" className="form-control custom-input" id="username" placeholder="Ingresa tu usuario" />
                </div>
                <div className="col-md-7">
                    <label className='form-label text-white'>Password *</label>
                    <input type="password" className="form-control custom-input" id="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div className='col-md-7'>
                    <button type="submit" className="btn color-button-general"><strong>Sign in</strong></button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;

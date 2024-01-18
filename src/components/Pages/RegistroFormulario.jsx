// RegistroFormulario.js
import React, { useState } from 'react';

const RegistroFormulario = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  const [datosCuenta, setDatosCuenta] = useState({
    usuario: '',
    contraseña: ''
  });

  const handleChangeDatosPersonales = (e) => {
    const { name, value } = e.target;
    setDatosPersonales((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const handleChangeDatosCuenta = (e) => {
    const { name, value } = e.target;
    setDatosCuenta((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes realizar acciones adicionales aquí si es necesario
    console.log('Datos finales:', { datosPersonales, datosCuenta });
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className='col-md-7'>

        </div>
        <div className="col-md-5 g-3 border-start p-5 border-dark">
          <form class="pl-3 row g-3" onSubmit={handleSubmit}>
            <div class="col-md-6">
              <label class="form-label">Nombre *</label>
              <input type="text" class="form-control" id="inputEmail4"></input>
            </div>
            <div class="col-md-6">
              <label class="form-label">Apellidos *</label>
              <input type="text" class="form-control" id="inputPassword4"></input>
            </div>
            <div class="col-12">
              <label class="form-label">Email *</label>
              <input type="email" class="form-control" id="inputAddress" placeholder="example@example.com"></input>
            </div>
            <div class="col-12">
              <label class="form-label">Direccion *</label>
              <input type="email" class="form-control" id="inputAddress2" placeholder="Ingresa tu direccion"></input>
            </div>
            <div class="col-6">
              <label class="form-label">Telefono *</label>
              <input type="telephone" class="form-control" id="inputAddress2" placeholder="Ingresa tu numero de telefono"></input>
            </div>
            <div class="col-6">
              <label class="form-label">Movil</label>
              <input type="telephone" class="form-control" id="inputAddress2" placeholder="Ingresa tu numero de telefono"></input>
            </div>
            <div class="col-md-6">
              <label class="form-label">Usuario *</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="col-md-6">
              <label class="form-label">Contraseña *</label>
              <input type="password" class="form-control" id="inputCity"></input>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label">Check me out</label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroFormulario;

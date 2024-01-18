import React, { useState } from 'react';

const RegistroFormulario = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    DNI: '',
    email: '',
    telefono: '',
    provincia: '',
    codigoPostal: '',
    calle: '',
    numero: '',
  });

  const [datosCuenta, setDatosCuenta] = useState({
    usuario: '',
    contraseña: '',
    repetirContraseña: ''
  });

  const handleChangeDatosPersonales = (e) => {
    const { name, value } = e.target;
    if (name === "apellidos") {
      let [apellido1, apellido2] = value.split(' ');
      setDatosPersonales((prevDatos) => ({ ...prevDatos, apellido1: apellido1 }))
      setDatosPersonales((prevDatos) => ({ ...prevDatos, apellido2: apellido2 }))
    } else {
      setDatosPersonales((prevDatos) => ({ ...prevDatos, [name]: value }));
    }
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
        <div className="col-md-5 border-start p-5 border-dark">
          <form className="pl-3 row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Nombre *</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={datosPersonales.nombre}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellidos *</label>
              <input
                type="text"
                className="form-control"
                name="apellidos"
                value={datosPersonales.apellidos}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="example@example.com"
                value={datosPersonales.email}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Telefono *</label>
              <input
                type="tel"
                className="form-control"
                name="telefono"
                placeholder="Telefono"
                value={datosPersonales.telefono}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Provincia *</label>
              <input
                type="text"
                className="form-control"
                name="provincia"
                placeholder="Provincia"
                value={datosPersonales.direccion}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Codigo Postal *</label>
              <input
                type="text"
                className="form-control"
                name="codigoPostal"
                placeholder="Codigo Postal"
                value={datosPersonales.direccion}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Calle *</label>
              <input
                type="text"
                className="form-control"
                name="calle"
                placeholder="Calle"
                value={datosPersonales.direccion}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Numero *</label>
              <input
                type="text"
                className="form-control"
                name="numero"
                placeholder="Numero"
                value={datosPersonales.direccion}
                onChange={handleChangeDatosPersonales}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Usuario *</label>
              <input
                type="text"
                className="form-control"
                name="usuario"
                value={datosCuenta.usuario}
                onChange={handleChangeDatosCuenta}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contraseña *</label>
              <input
                type="password"
                className="form-control"
                name="contraseña"
                value={datosCuenta.contraseña}
                onChange={handleChangeDatosCuenta}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Repetir Contraseña *</label>
              <input
                type="password"
                className="form-control"
                name="repetirContraseña"
                value={datosCuenta.contraseña}
                onChange={handleChangeDatosCuenta}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label">Check me out</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroFormulario;

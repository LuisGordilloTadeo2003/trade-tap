import React, { useState } from 'react';

const RegisterForm = () => {
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
    <div className="col-md-5 border-start p-5 border-custom-registerLogin">
      <form className="pl-3 row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label text-white">Nombre *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="nombre"
            placeholder='Nombre'
            value={datosPersonales.nombre}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-white">Apellidos *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="apellidos"
            placeholder='Apellidos'
            value={datosPersonales.apellidos}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Email *</label>
          <input
            type="email"
            className="form-control custom-input"
            name="email"
            placeholder="example@example.com"
            value={datosPersonales.email}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Telefono *</label>
          <input
            type="tel"
            className="form-control custom-input"
            name="telefono"
            placeholder="Telefono"
            value={datosPersonales.telefono}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Provincia *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="provincia"
            placeholder="Provincia"
            value={datosPersonales.direccion}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Codigo Postal *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="codigoPostal"
            placeholder="Codigo Postal"
            value={datosPersonales.direccion}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Calle *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="calle"
            placeholder="Calle"
            value={datosPersonales.direccion}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-6">
          <label className="form-label text-white">Numero *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="numero"
            placeholder="Numero"
            value={datosPersonales.direccion}
            onChange={handleChangeDatosPersonales}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label text-white">Usuario *</label>
          <input
            type="text"
            className="form-control custom-input"
            name="usuario"
            placeholder='Usuario'
            value={datosCuenta.usuario}
            onChange={handleChangeDatosCuenta}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-white">Contraseña *</label>
          <input
            type="password"
            className="form-control custom-input"
            name="contraseña"
            placeholder='Contraseña'
            value={datosCuenta.contraseña}
            onChange={handleChangeDatosCuenta}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label text-white">Repetir Contraseña *</label>
          <input
            type="password"
            className="form-control custom-input"
            name="repetirContraseña"
            placeholder='Repite la contraseña'
            value={datosCuenta.contraseña}
            onChange={handleChangeDatosCuenta}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn color-button-registerLogin"><strong>Sign in</strong></button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

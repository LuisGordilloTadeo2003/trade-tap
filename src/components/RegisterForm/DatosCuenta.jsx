// DatosCuenta.js
import React from 'react';

const DatosCuenta = ({ datosCuenta, setDatosCuenta, avanzarPaso, retrocederPaso }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosCuenta((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones u otras lógicas pueden ir aquí
    avanzarPaso();
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 mx-auto mt-5">
      <h2 className="mb-4">Datos de la Cuenta</h2>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">Usuario:</label>
        <input type="text" className="form-control" id="usuario" name="usuario" value={datosCuenta.usuario} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">Contraseña:</label>
        <input type="password" className="form-control" id="contraseña" name="contraseña" value={datosCuenta.contraseña} onChange={handleChange} />
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={retrocederPaso}>Atrás</button>
        <button type="submit" className="btn btn-primary">Siguiente</button>
      </div>
    </form>
  );
};

export default DatosCuenta;

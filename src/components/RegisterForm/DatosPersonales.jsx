// DatosPersonales.js
import React from 'react';

const DatosPersonales = ({ datosPersonales, setDatosPersonales, avanzarPaso }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales((prevDatos) => ({ ...prevDatos, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones u otras lógicas pueden ir aquí
    avanzarPaso();
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6 mx-auto mt-5">
      <h2 className="mb-4">Datos Personales</h2>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input type="text" className="form-control" id="nombre" name="nombre" value={datosPersonales.nombre} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido:</label>
        <input type="text" className="form-control" id="apellido" name="apellido" value={datosPersonales.apellido} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={datosPersonales.email} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Siguiente</button>
    </form>
  );
};

export default DatosPersonales;

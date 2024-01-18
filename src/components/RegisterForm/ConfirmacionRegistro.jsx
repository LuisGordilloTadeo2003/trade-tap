// ConfirmacionRegistro.js
import React from 'react';

const ConfirmacionRegistro = ({ datosPersonales, datosCuenta, retrocederPaso }) => {
  const handleConfirmar = () => {
    // Lógica para enviar los datos de registro al servidor o realizar otras acciones
    console.log('Datos confirmados:', { datosPersonales, datosCuenta });
  };

  return (
    <div className="col-md-6 mx-auto mt-5">
      <h2 className="mb-4">Confirmación de Registro</h2>
      <div className="mb-3">
        <strong>Datos Personales:</strong>
        <p>Nombre: {datosPersonales.nombre}</p>
        <p>Apellido: {datosPersonales.apellido}</p>
        <p>Email: {datosPersonales.email}</p>
      </div>
      <div className="mb-3">
        <strong>Datos de la Cuenta:</strong>
        <p>Usuario: {datosCuenta.usuario}</p>
        <p>Contraseña: {datosCuenta.contraseña}</p>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={retrocederPaso}>Atrás</button>
        <button className="btn btn-primary" onClick={handleConfirmar}>Confirmar Registro</button>
      </div>
    </div>
  );
};

export default ConfirmacionRegistro;

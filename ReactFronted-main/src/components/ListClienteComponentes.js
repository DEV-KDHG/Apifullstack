import React, { useEffect, useState } from "react";
import ClienteService from "../service/ClienteService";

export const ListClienteComponentes = () => {
  const [empleados, SetEmpleados] = useState([]);
useEffect(()=> {
ClienteService.getAllClientes().then(response => {
SetEmpleados(response.data); 
console.log(response.data)
}). catch(error => {console.log(error); 
})
}, [])
  return (
    <div className={"container"}>
      <h2 className={"text-center"}>Lista de empleados</h2>

      <table className={"table table-bordered table-striped"}>
        <thead>
          <th>ID</th>
          <th>Nombre</th>
          <th> Apellido</th>
          <th>Email</th>

          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td> {empleado.nombre} </td>
                <td> {empleado.apellido} </td>
                <td> {empleado.email} </td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default ListClienteComponentes;

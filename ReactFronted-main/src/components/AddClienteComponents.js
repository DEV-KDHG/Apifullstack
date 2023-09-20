import React, { useState } from "react";
import ClienteService from "../service/ClienteService";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const AddClienteComponents = () => {
  const [nombre, setNombre] = useState("");
  const [email, setemail] = useState("");
const navigate =useNavigate();
  const SaveCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, email };
    ClienteService.createCliente(cliente).then((response) => {
      console.log(response.data);
 navigate("/clientes");
 
 
    }).catch(error=> {
      console.log(error)
    });



  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text center">Registro clientes</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Digite du nombre"
                    name="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">email</label>
                  <input
                    type="email"
                    placeholder="Digite su email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                </div>
                <button className="btn btn-success"onClick={(e) => SaveCliente(e)}>
                  {" "}
                  Guardar
                </button>


              <br></br>
            <br></br>
<Link to ="/clientes" className="btn btn-danger"> Cancelar</Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddClienteComponents;
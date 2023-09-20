import React, { useState } from "react";

const AddClienteComponents = () => {
  const [nombre, setNombre] = useState("");
  const [email, setemail] = useState("");

  const SaveCliente = (e) => {
    const cliente = { nombre, email };
    console.log(cliente);
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
                <button className="btn btn-success" onClick={(e) => SaveCliente}> Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClienteComponents;

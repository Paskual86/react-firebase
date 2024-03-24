import React, { useState } from "react";
import uniqid from "uniqid";

const formMode = {
  Edit: 1,
  Add: 2,
  Delete: 3
}

function ListadoNombres() {
  
  const [name, setName] = useState("");
  const [listNames, setListNames] = useState([]);
  const [mode, setMode] = useState(formMode.Add);

  const addName = (event) => {
    event.preventDefault();
    setMode(formMode.Add);
    const newName = {
      Id: uniqid(),
      Name: name,
    };
    setListNames([...listNames, newName]);
    setName('');
  };

  const deleteName = (id) => {
      const newArray = listNames.filter(item => item.Id !== id);
      setListNames(newArray);
  }

  const editEvent = (item) => {
    setName(item.Name);
    setMode(formMode.Edit);
  }

  return (
    <div className="container">
      <h2>CRUD Basic</h2>
      <div className="row">
        <div className="col-md">
          <h2>Listado de nombres</h2>
          <ul className="list-group">
            {listNames.map((item) => (
              <li key={item.Id} className="list-group-item">
                  <div className="container">
                    <div className="row inline">
                      <div className="col-8">
                        {item.Name}
                      </div>
                      <div className="col-2">
                        <button type="button" className="btn btn-success" onClick={() => {editEvent(item)}} >Edit</button>
                      </div>
                      <div className="col-2">
                        <button type="button" className="btn btn-danger mr-0" onClick={() => {deleteName(item.Id)}} >Borrar</button>
                      </div>
                    </div>
                  </div>
                    
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={addName} className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control mb3"
              placeholder="introduce el nombre"
              value={name}
            />

            <input
              type="submit"
              className="btn btn-info btn-block mt-3"
              value={(mode == formMode.Add) ? "Registrar" : "Editar Nombre"}
            />

          </form>
        </div>
      </div>
    </div>
  );
}

export default ListadoNombres;

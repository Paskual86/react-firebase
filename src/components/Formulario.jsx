import React, { useState } from 'react';

function Formulario () {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const Validar = (event) =>{
        event.preventDefault();
        console.log("Button Press");
        if(!nombre.trim()){
            console.log('El nombre esta vacio');
            return;
        }
        if(!edad.trim()){
            console.log('Edad esta vacio');
            return;
        }
    }
    return (
        <div className="container" >
            <form onSubmit={Validar} className="form-group">
                <input type="text"
                    className="form-control mb-3"
                    placeholder="Nombre"
                    onChange={(e) => {setNombre(e.target.value)}}
                />
                <input type="text"
                className="form-control mb-3"
                placeholder="Edad"
                onChange={(e) => {setEdad(e.target.value)}}
                />
                <input type="submit"
                className="btn btn-info btn-block mb-3"
                />
            </form>
        </div>
    );
}

export default Formulario;
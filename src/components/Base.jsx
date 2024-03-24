import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Base()  {
    const [name, setName] = useState('Pablo');

    useEffect(() => {
        setTimeout(() => {
            setName("Noe")
        }, 3000);
    });
    
    const {param1, param2} = useParams();

    return (

        <div>
            <h1>Pagina de Base Ruta /</h1>
            {name}
            <div>
                <h3>{param1}</h3>
                <h3>{param2}</h3>
            </div>
        </div>
    );
}

export default Base;
import React, { useState } from 'react';

export default function Contador (){

    const [number, setNumber] = useState(0);

    const add = () => {
        setNumber(number+1);
    }

    const reduce = () => {
        setNumber(number-1);
    }
        return (
            <>
                <h2>Cantidad del contador: {number}</h2>
                <button onClick={add} className="btn btn-success btn-block"> Add </button>
                <button onClick={reduce} className="btn btn-danger btn-block"> Reduce </button>
            </>
        );
}


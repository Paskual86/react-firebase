import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
    
    const [usuarios, setUsers] = useState([]);

    const getUsers = async() =>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const useraux = await res.data;
        setUsers(useraux);
    };
    
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h2>List Users</h2>
            {
                usuarios.map((item) => (
                    <li key={item.id}>
                        <Link to={`/users/details/${item.id}`}>{item.name}</Link>
                    </li>
                ))
            }
        </div>
    );
}

export default Users;
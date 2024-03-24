import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function UserDetail () {

    const [user, setUserDetail] = useState([]);

    const {id} = useParams();

    const getUserDetails = async() =>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const useraux = await res.data;
        setUserDetail(useraux);
    };
    
    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div>
            <h1>Detalle del usuario: {user.name}</h1>
            
            <p>User Name: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Web Site: {user.website}</p>            
        </div>
    );
}

export default UserDetail;
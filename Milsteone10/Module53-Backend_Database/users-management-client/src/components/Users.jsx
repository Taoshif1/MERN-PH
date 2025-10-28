import React from 'react'
import { useState } from 'react';
import { use } from 'react'

const Users = ({usersPromise}) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);

        const newUser  = { name, email};

        // Send data to server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data =>{
                console.log("after post - ", data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                e.target.reset();
            })
    }

  return (
    <div>
        <div>
            <h3>Add a user</h3>
            <form onSubmit={handleAddUser}>
                <input name="name" id=" " type="text" placeholder='name'/>
                <br />
                <input name="email" id=" " type="email" placeholder='email'/>
                <br />
                <button>Add User</button>
            </form>
        </div>
        <div>
            {
            users.map(user => 
            <p key={user.id}>
                {user.name} - {user.email}
            </p>)
        }    
        </div>
    </div>
  )
}

export default Users;

/**
 * 0. have to send request object to the server
 * 1. mention method: post
 * 2. mention header: about JSON data in the property of content-type:application/json
 * 3. body: JSON.stringify(newUser)
 * 
 * -------------------------------------
 * on the server side use json as middleware
 * app.use(express.json())
 */
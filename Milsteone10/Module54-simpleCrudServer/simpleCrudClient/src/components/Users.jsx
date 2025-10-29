import React from 'react'
import { useState } from 'react';
import { use } from 'react';

const Users = ({usersPromise}) => {
    const initialUsers = use(usersPromise);
    console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log('Name & Email: ', name, email);
        const newUser ={name, email};

        //save this user data (name, email) to database via server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data =>{
                console.log('after saving user data: ', data);
                if(data.insertedId){
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert("Users added successfully");
                    e.target.reset();
                }
            })
        
    }
  return (
    <div>
        <form onSubmit={handleAddUser}>
            <input type="text" name='name' id='name' placeholder='name'/>
            <br />
            <input type="text" name='email' id='email' placeholder='email'/>
            <br />
            <button type='submit' value='Add User'>Add User</button>
        </form>
        <p>----------------------------------------</p>
        <div>
            {
            users.map(user => <p key={user._id}>
                {user.name} - {user.email}
                <button>X</button>
                </p> )
        }
        </div>
    </div>
  )
}

export default Users
import React from 'react'
import { data, useLoaderData } from 'react-router'

const updateUser = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUserUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);

        const updateUser = {name, email};

        //send data to the server
        fetch(`http://localhost:3000/users/${user._id}`,{
            method: "PATCH", 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after update -> ', data);
                if(data.modifiedCount){
                    alert('User Info Updated');
                }
            })
    }


  return (
    <div>
        <h2>Edit a user</h2>

        <form onSubmit={handleUserUpdate}>
            <input type="text" name='name' id='name' placeholder='Name' defaultValue={user.name} />
            <br />
            <input type="email" name='email'id='email' placeholder='Email' defaultValue={user.email} />
            <br />
            <input type="submit" value= "Update User" />

        </form>
    </div>
  )
}

export default updateUser
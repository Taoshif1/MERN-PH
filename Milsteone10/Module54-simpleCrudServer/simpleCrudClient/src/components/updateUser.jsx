import React from 'react'
import { useLoaderData } from 'react-router'

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
        fetch(`http://localhost:3000/users/${param.id}`,{
            method: "PATCH"
        })
            .then(res = res.json())
            .then(data = {
                console.log('after update -> ')
            })
    }


  return (
    <div>
        Edit user

        <form onSubmit={handleUserUpdate}>
            <input type="text" name='name' id='name' placeholder='Name' />
            <br />
            <input type="email" name='email'id='email' placeholder='Email' defaultValue={user.name} />
            <br />
            <input type="submit" value= "Update User" />

        </form>
    </div>
  )
}

export default updateUser
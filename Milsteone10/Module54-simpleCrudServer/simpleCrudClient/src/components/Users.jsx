import React from 'react'

const Users = () => {

    const handleAddUser = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log('Name: ' +name+ ', Email: '+email);
        const newUser ={name, email};

        //save this user data (name, email) to database via server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data =>{
                console.log('after saving user data: ', data);
                if(data.insertedId){
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
    </div>
  )
}

export default Users
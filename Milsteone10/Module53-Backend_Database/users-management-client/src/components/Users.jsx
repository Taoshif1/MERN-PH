import React from 'react'
import { use } from 'react'

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);


  return (
    <div>
        <div>
            <h3>Add a user</h3>
            <form>
                <input type="text" placeholder='name'/>
                <br />
                <input type="email" placeholder='email'/>
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

export default Users
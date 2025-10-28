import React from 'react'
import { use } from 'react'

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);


  return (
    <div>  </div>
  )
}

export default Users
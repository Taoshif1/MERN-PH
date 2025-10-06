import { use } from 'react'
import User from './User'

export default function Users({fetchUsers}) {

    const users = use(fetchUsers)
    console.log(users)
    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
            {
                users.map(user=> <User user={user} ></User> )
            }
        </div>
    )
}



const User = ({user}) => {

    return (
        <div className="card">
            <h4>User - {user.id} : {user.name}</h4>
            <h5>Email: {user.email}</h5>
            <h6>Phone: {user.phone}</h6>
        </div>
    )
};

export default User;

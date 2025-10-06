
const User = ({user}) => {
    const {name} = user;

    return (
        <div>
            <h4>{user.name}</h4>
        </div>
    )
};

export default User;

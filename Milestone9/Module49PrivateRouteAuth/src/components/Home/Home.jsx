import { AuthContext } from "../../AuthContext/AuthContext";
import { use } from "react";
        

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <h1>My Home</h1>
        </div>
    );
};

export default Home;
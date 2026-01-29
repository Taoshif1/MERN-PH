import Navbar from '../components/Navbar';
import App from '../App';
import { Outlet } from 'react-router';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            {/* <App></App> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Home;
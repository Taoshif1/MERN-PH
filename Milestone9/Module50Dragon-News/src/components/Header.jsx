import React from 'react';
import logo from "../assets/logo.png"
import { format} from "date-fns";

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[450px]' src={logo} alt="" />
            {/* <h1>This is header</h1> */}
            <p className='text-accent'>Journalism without Fear or Favour</p>
            
            {/* Date added dynamically using date-fns */}
            <p className='text-semibold text-accent'>{ 
                format(new Date(), "EEEE, MMMM MM, yyyy")
                }</p>
        </div>
    );
};

export default Header;
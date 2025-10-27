import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();

  return (
    <div>All Phones Here: {phones.length}
    {
        phones.map(phone => 
        <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>
                {phone.name}
            </Link>
        </li>)
    }
    </div>
  )
}

export default Phones
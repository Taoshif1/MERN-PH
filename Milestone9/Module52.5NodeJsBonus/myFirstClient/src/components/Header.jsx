import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{ padding: '10px', margin: "10px", backgroundColor: '#353636ff' }}>
        Header 
        {/* FIX: Removed the trailing space from the 'to' path */}
        <Link to="/phones" style={{ marginLeft: '20px', textDecoration: 'none', color: 'blue' }}>Phones</Link>
    </div>
  )
}

export default Header
import React from 'react'
import "../styles/main.css";

function Navbar() {
  return (
    <header>
        <img src="busha.png" alt="" />
        <nav>
            <div className='move'>
                <button className='but'>O</button>
                <h3 className='tobi'>Oluwatobi Akindunjoye</h3>
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
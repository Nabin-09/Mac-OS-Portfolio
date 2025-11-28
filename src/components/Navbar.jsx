import { navLinks } from '#constants'
import React from 'react'



const Navbar = () => {
  return(
    <nav>
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <p className='font-bold'>Nabin's Portfolio</p>

            <ul>
                {navLinks.map(({id , name})=>(
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}

            </ul>
        </div>
    </nav>
  )
}

export default Navbar

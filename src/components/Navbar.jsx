import { navIcons, navLinks } from '#constants'
import dayjs from 'dayjs'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      {/* LEFT SIDE */}
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-georama font-bold">Nabin's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p className="font-georama">{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time className='font-georama'>{dayjs().format("ddd MM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar

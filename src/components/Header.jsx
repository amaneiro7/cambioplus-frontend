import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    const handleClickMenu = () => setIsActiveMenu(!isActiveMenu)
    const navlinks = [
        {link: 'Inicio', to: "/"},
        {link: 'Nosotros', to: "/Nosotros"},
        {link: 'Servicios', to: "/Servicios"},
        {link: 'FAQs', to: "/FAQs"},
        {link: 'Contactos', to: "/Contactos"},
        ]
  return (
    <header className="shadow fixed w-full z-10">
  <nav className="flex flex-col relative justify-between items-start pl-6 py-3 bg-[#05355F] md:pr-6 md:flex-row md:items-center overflow-hidden">
    <nav>
      <a href="/">
        <img className="aspect-square h-12 md:h-14 rounded-full border-2 border-green-600" src="/assets/logo.jpg" alt="Logo Cambio Plus" />
      </a>
    </nav>
    <button 
        data-togglebtn 
        className="absolute top-6 right-4 flex flex-col justify-between w-8 h-5 md:hidden"
        onClick={handleClickMenu}
    >
      <span data-menuicon className={`${isActiveMenu && 'absolute top-2 rotate-45'}h-1 w-full bg-white rounded-xl transition-all duration-200 ease-in`} />
      <span data-menuicon className={`${isActiveMenu && 'bg-transparent'}h-1 w-full bg-white rounded-xl`} />
      <span data-menuicon className={`${isActiveMenu && 'absolute top-2 rotate-[-45deg]'}h-1 w-full bg-white rounded-xl transition-all duration-200 ease-in`} />
    </button>        
    <ul data-navlinks className="max-md:max-h-0 peer-checked/menuIcon:max-md:max-h-52 flex flex-col md:flex-row max-md:w-full h-full m-0 py-0 px-4 tansition ease-linear duration-300">
      {
      navlinks.map(({link, to}) => (
      <li className="list-none text-right">
        <NavLink 
            className={({isActve}) => `${isActve && "text-while"} block font-semibold py-2 hover:text-white/80 text-white/50 md:p-4`}
            to={to}
        >
          {link}
        </NavLink>
      </li>
      ))
      }
    </ul>
  </nav>
</header>

  )
}

import {headerLogo} from '../assets/images'
import {navLinks} from '../constants/index'
import {hamburger} from '../assets/icons'
import { useState } from 'react'
const Nav = () => {
    const [hamClicked, setHamClicked] = useState(false)
  return (
    <header className="padding-x py-8 fixed w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            width={129}
            height={29}
            className="w-[129px] h-[29] m-0"
            src={headerLogo}
            alt="logo"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              className="px-2 py-1  rounded-3xl shadow-lg ring-0 ring-white-200 "
              key={link.label}
            >
              <a
                className="text-black font-bold text-md leading-normal font-montserrat"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            width={25}
            height={25}
            src={hamburger}
          />
        </div>
        {/* {hamClicked && (
          <div className='justify-center py-5 bg-black'>
            <ul className="flex flex-col bg-white ">
              {navLinks.map((item) => (
                <li className="p-5">
                  <a>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </nav>
    </header>
  );
}

export default Nav
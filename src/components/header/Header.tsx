'use client'

import NavBar from "../navBar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };
    return (
        <header className="flex justify-between items-center px-8 w-full">
            <img className='w-20 xl:w-24' src="/logo.png" alt="logo" />
            <button onClick={() => setIsOpen(!isOpen)} onBlur={handleBlur}>
                <GiHamburgerMenu size={30} className=' hover:scale-125 cursor-pointer text-custom-300 hover:text-custom-400 md:hidden transition-all ease-in-out  duration-500' />
            </button>
            <NavBar isOpen={isOpen} />
        </header>
    );
}

export default Header;
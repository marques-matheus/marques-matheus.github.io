import Link from 'next/link';
import React from 'react';


type Props = {
    text: string;
    href: string;
}


const NavLink: React.FC<Props> = ({ text, href }) => {
    return (
        <Link href={href} className="font-semibold text-lg xl:text-xl text-custom-300 hover:text-custom-400">
            {text}
        </Link>
    )
}


export default NavLink;
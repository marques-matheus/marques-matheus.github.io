import { useTranslations } from 'next-intl';
import NavLink from '../navLink';
import { Link } from '@/i18n/routing';
import Social from '../social';
import { usePathname } from 'next/navigation';



export default function NavBar({ isOpen }: { isOpen: boolean }) {
    const currentPath = usePathname();
    const t = useTranslations('Navigation')
    return (
        <nav className={`absolute w-full ${isOpen ? 'flex top-0 right-0 items-end bg-custom-800  h-fit pt-10 pb-4 px-8 sm:px-12 opacity-100' : 'hidden -top-80 opacity-0'} 
        md:bg-transparent md:static md:flex md:opacity-100  flex-col md:flex-row md:justify-between md:items-center md:py-4 md:px-4 md:w-2/3 lg:w-3/4 xl:w-4/12 transition-all  ease-in-out duration-500`}>
            <NavLink text={t('home')} href="/" />
            <NavLink text={t('about')} href="/about" />
            <NavLink text={t('portfolio')} href="/portfolio" />
            <div className="box-content space-y-5 md:space-y-0 md:space-x-3 flex flex-col md:flex-row items-end md:items-center">
                <Social />
                <div className='flex space-x-2'>
                    <Link locale="pt" href={currentPath as "/" | "/about"}>
                        <img className='w-5 rounded-full hover:scale-125 cursor-pointer  transition-all ease-in-out  duration-500' src="/brasil.svg" alt="pt" />
                    </Link>
                    <Link locale="en" href={currentPath as "/" | "/about"}>
                        <img className='w-5 rounded-full  hover:scale-125 cursor-pointer  transition-all ease-in-out  duration-500' src="/us.svg" alt="en" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}


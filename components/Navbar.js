// Components
import Link from 'next/link';

// Functions
import openModal from '../functions/openModal';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

// Heroicons
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Navbar() {

    // Get state from Context
    const { modal, setModal, mobileView } = useContext(Context);

    return (
        <nav className='flex justify-between items-center h-16 md:h-20 2xl:h-24 page-sizing mx-0 md:px-28 lg:px-32 xl:px-40 2xl:px-64 border-b border-gray-300 bg-white sticky top-0 z-10 body-text'>
            <Link href='/' className={`${mobileView?.width < '485' ? 'ml-7' : ''} md:hidden pt-1 md:pt-0 ml-10`}><img src='/icons/favicon.png' alt='Logo' /></Link>
            <section className='nav-link-container pl-5'>
                <Link className='nav-links' href='/'>Home</Link>
                <Link className='nav-links' href='/#about'>About</Link>
            </section>
            <section className='hidden md:flex items-center lg:space-x-2 2xl:space-x-4'>
                <Link href='/' className='lg:hidden'><img src='/icons/favicon.png' alt='Logo' /></Link>
                <img className='hidden lg:block' src='/icons/favicon.png' alt='Logo' />
                <Link href='/'><h1 className=' text-md lg:text-xl xl:text-2xl md:hidden lg:block font-semibold'>West Oceanside Coffee</h1></Link>
            </section>
            <section className='nav-link-container pr-5'>
                <Link className='nav-links' href='/#menu'>Menu</Link>
                <Link className='nav-links' href='/#contact'>Contact</Link>
            </section>
            <section className='flex space-x-9 md:hidden mr-10'>
                <Link href='/' className='nav-link-mobile nav-links'>Home</Link>
                <Link href='/#about' className='nav-link-mobile nav-links'>About</Link>
                <Link href='/#menu' className='nav-link-mobile nav-links'>Menu</Link>
                <Link href='/#contact' className='nav-link-mobile nav-links'>Contact</Link>
                {!modal && <Bars3Icon onClick={() => openModal(modal, setModal)} className='sm:hidden h-6 w-6 cursor-pointer'/>}
            </section>
        </nav>
    )
}

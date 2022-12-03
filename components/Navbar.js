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
    const { modal, setModal } = useContext(Context);

    return (
        <nav className='flex justify-between items-center h-16 md:h-20 2xl:h-24 page-sizing'>
            
            <Link href='/' className='md:hidden ml-10'>Logo</Link>
            <section className='nav-link pl-5'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
            </section>
            <Link href='/' className='hidden md:block'>Logo</Link>
            <section className='nav-link pr-5'>
                <Link href='/'>Menu</Link>
                <Link href='/'>Contact</Link>
            </section>
            <section className='flex space-x-9 md:hidden mr-10'>
                <Link href='/' className='nav-link-mobile'>Home</Link>
                <Link href='/' className='nav-link-mobile'>About</Link>
                <Link href='/' className='nav-link-mobile'>Menu</Link>
                <Link href='/' className='nav-link-mobile'>Contact</Link>
                <Bars3Icon onClick={() => openModal(modal, setModal)} className='sm:hidden h-6 w-6 cursor-pointer'/>
            </section>
        </nav>
    )
}
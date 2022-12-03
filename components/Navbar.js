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
        <nav className='flex justify-between items-center h-16 bg-green-300'>
            <Link href='/' className='md:hidden ml-10'>Logo</Link>
            <section className='nav-link md:ml-28 lg:ml-40 xl:ml-52 2xl:ml-64'>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
            </section>
            <Link href='/' className='hidden md:block'>Logo</Link>
            <section className='nav-link md:mr-28 lg:mr-40 xl:mr-52 2xl:mr-64'>
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
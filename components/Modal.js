// Components
import Link from 'next/link';

// Functions
import openModal from '../functions/openModal';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

// Heroicons
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function Modal() {

    // Get state from Context
    const { modal, setModal } = useContext(Context);

    return (
        <nav onClick={() => openModal(modal, setModal)} className='flex flex-col pt-16 items-center space-y-8 mx-auto fixed top-0 w-screen h-screen text-white bg-black/80 z-20 text-2xl body-text'>
            <XMarkIcon className='h-6 w-6 fixed top-5 right-10 cursor-pointer'/>
            <Link href='/' className=''>Home</Link>
            <Link href='/#about' className=''>About</Link>
            <Link href='/#menu' className=''>Menu</Link>
            <Link href='/#contact' className=''>Contact</Link>
        </nav>
    )
}
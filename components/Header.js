// Components
import Image from 'next/image';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function Header() {

    // Get state from Context
    const { mobileView } = useContext(Context);

    return (
        <header className='page-sizing relative'>
            <Image 
                src='/images/header.png'
                alt='Image of a beach side coffee shop'
                width={1700}
                height={1700}
                priority
            />
            <div className={`absolute top-0 left-0 bg-black/10 ${mobileView?.width < '485' ? 'bg-black/20' : ''} w-full h-full`}></div>
            <section className={`absolute top-4 left-4 ${mobileView?.width < '485' ? '-top-3 -left-1' : ''} sm:top-10  sm:left-10 p-10`}>
                <h1 className={`header-h1 mb-3 ${mobileView?.width < '485' ? 'text-3xl' : ''}`}>High quality coffee</h1>
                <h1 className={`header-h1 mb-8 ${mobileView?.width < '485' ? 'text-3xl mb-6' : ''}`}>since 2018</h1>
                <hr className={`mb-8 border w-52 lg:w-64 xl:w-80 2xl:w-96 ${mobileView?.width < '485' ? 'hidden' : ''}`}/>
                <section className='flex items-center space-x-3'>
                    <img className='cursor-pointer w-10 h-10' src='/icons/instagram.png' alt='Instagram logo' />
                    <img className='cursor-pointer w-9 h-9' src='/icons/facebook.png' alt='Facebook logo' />
                </section>
            </section>
        </header>
    )
}

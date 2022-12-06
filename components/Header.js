// Components
import Image from 'next/image';

export default function Header() {
    return (
        <header className='page-sizing relative'>
            <Image 
                src='/images/header.png'
                alt='Image of a beach side coffee shop'
                width={1700}
                height={1700}
                priority
            />
            <div className='absolute top-0 left-0 bg-black/10 w-full h-full'></div>
            <section className='absolute top-4 sm:top-10 left-4 sm:left-10 p-10'>
                <h1 className='header-h1 mb-3'>High quality coffee</h1>
                <h1 className='header-h1 mb-8'>since 2018</h1>
                <section className='flex items-center space-x-3'>
                    <img className='cursor-pointer w-10 h-10' src='/icons/instagram.png' alt='Instagram logo' />
                    <img className='cursor-pointer w-9 h-9' src='/icons/facebook.png' alt='Facebook logo' />
                </section>
            </section>
        </header>
    )
}

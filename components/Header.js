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
            />
            <div className='absolute top-0 left-0 bg-black/10 w-full h-full'></div>
            <section className='absolute top-10 left-10 p-10'>
                <h1 className='text-white text-4xl'>High quality since 2018</h1>
                <p className='text-white'>Instagram</p>
                <p className='text-white'>Facebook</p>
            </section>
        </header>
    )
}
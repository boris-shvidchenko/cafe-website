// Components
import Image from 'next/image';

export default function About() {
    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl ml-10 md:ml-0 mb-6 md:mb-10'>Our Story</h1>
            <section className='flex justify-between mb-20'>
                <Image
                    src='/images/about.png'
                    alt=''
                    width={620}
                    height={100}
                />
                <p className='mr-72'>About us - Our story</p>
            </section>
            <section className='flex justify-between'>
                <p>Our location</p>
                <Image
                    src='/images/about2.png'
                    alt=''
                    width={620}
                    height={100}
                />
            </section>
        </div>
    )
}
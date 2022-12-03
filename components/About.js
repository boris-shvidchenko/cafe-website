// Components
import Image from 'next/image';

export default function About() {
    // Note: width/height in below images have been set to 1000 as placeholders (Next Image components require the 2 attributes). The real sizes are in the class names.
    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl ml-10 md:ml-0 mb-6 md:mb-10'>Our Story</h1>
            <section className='flex justify-between mb-16'>
                <Image
                    src='/images/about.png'
                    alt=''
                    width={1000}
                    height={1000}
                    className='md:w-96 lg:w-[600px]'
                />
                <p className='mr-72'>About us - Our story</p>
            </section>
            <section className='flex justify-between'>
                <p>Our location</p>
                <Image
                    src='/images/about2.png'
                    alt=''
                    width={1000}
                    height={1000}
                    className='md:w-96 lg:w-[600px]'
                />
            </section>
        </div>
    )
}
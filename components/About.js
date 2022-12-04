// Components
import Image from 'next/image';

export default function About() {
    // Note: width/height in below images have been set to 1000 as placeholders (Next Image components require the 2 attributes). The real sizes are in the class names.
    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl ml-10 md:ml-0 mb-4 lg:mb-10'>Our Story</h1>
            <section className='lg:flex justify-between mb-10'>

                <p className='lg:hidden mx-11 md:mx-1 mb-7 md:mb-10'>Opened in 2018, West Oceanside Coffee has been serving the local community with high quality coffee from locally sources products. We offer a variety of drinks, menu items, and other products. Drop by and grab something to go, hang out after a surf session, or simply come and enjoy our beach side location with your family!   </p>

                <Image
                    src='/images/about.png'
                    alt=''
                    width={1000}
                    height={1000}
                    className='w-[83%] mx-auto sm:w-[90%] lg:w-[60%] xl:w-[580px] 2xl:w-[630px] xl:ml-0'
                />

                <section className='xl:flex flex-col space-y-4'>
                    <p className='hidden lg:block ml-9'>Opened in 2018, West Oceanside Coffee has been serving the local community with high quality coffee from locally sources products. We offer a variety of drinks, menu items, and other products. Drop by and grab something to go, hang out after a surf session, or simply come and enjoy our beach side location with your family!   </p>
                    <p className= 'hidden xl:block mx-9 pb-8'>We are located just west of Carpinteria, on Oceanside Drive. Come say hello!</p>
                    <p className= 'hidden xl:block mx-9 text-center text-xl'>3480 Oceanside Drive</p>
                    <p className= 'hidden xl:block mx-9 text-center text-xl'>Santa Barbara, CA</p>
                </section>


            </section>
            <section className='lg:flex justify-between'>

                <section className='flex flex-col xl:hidden md:-mt-10'>
                    <p className= 'mx-11 md:mx-1  md:mt-10 lg:mr-9 pb-4'>We are located just west of Carpinteria, on Oceanside Drive. Come say hello!</p>
                    <p className= 'xl:hidden mx-11 md:mx-1 text-xl'>3480 Oceanside Drive</p>
                    <p className= 'xl:hidden mx-11 md:mx-1 text-xl mb-7 '>Santa Barbara, CA</p>
                </section>

                <Image
                    src='/images/about2.png'
                    alt=''
                    width={1000}
                    height={1000}
                    className='w-[83%] mx-auto sm:w-[90%] lg:w-[60%] xl:w-[80%] xl:mt-5'
                />
            </section>
        </div>
    )
}
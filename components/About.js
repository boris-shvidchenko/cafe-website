// Components
import Image from 'next/image';

export default function About() {
    // Note: width/height in below images have been set to 1000 as placeholders (Next Image components require the 2 attributes). The real sizes are in the class names.
    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <div id='about' className='nav-placeholder-div'></div>
            <h1 className='body-headers'>Our Story</h1>
            <section className='lg:flex justify-between mb-10'>
                <p className='lg:hidden mx-10 md:mx-1 mb-7 md:mb-10'>Opened in 2018, West Oceanside Coffee has been serving the local community with high quality coffee from locally sources products. We offer a variety of drinks, menu items, and other products. Drop by and grab something to go, hang out after a surf session, or simply come and enjoy our beach side location with your family!</p>
                <Image
                    src='/images/about.png'
                    alt='An image of coffee being brewed.'
                    width={1000}
                    height={1000}
                    className='about-image xl:w-[580px] 2xl:w-[630px] xl:ml-0'
                />
                <section className='xl:flex flex-col space-y-4'>
                    <p className='hidden lg:block ml-9'>Opened in 2018, West Oceanside Coffee has been serving the local community with high quality coffee from locally sources products. We offer a variety of drinks, menu items, and other products. Drop by and grab something to go, hang out after a surf session, or simply come and enjoy our beach side location with your family!</p>
                    <p className= 'hidden xl:block mx-9 pb-5'>We are located just west of Carpinteria, on Oceanside Drive. Come say hello!</p>
                    <p className= 'about-address'>3480 Oceanside Drive</p>
                    <p className= 'about-address'>Santa Barbara, CA</p>
                </section>
            </section>
            <section className='lg:flex justify-between'>
                <section className='flex flex-col xl:hidden md:-mt-10'>
                    <p className= 'mx-10 md:mx-1  md:mt-10 lg:mr-9 pb-4'>We are located just west of Carpinteria, on Oceanside Drive. Come say hello!</p>
                    <p className= 'about-address-mobile'>3480 Oceanside Drive</p>
                    <p className= 'about-address-mobile mb-7 '>Santa Barbara, CA</p>
                </section>
                <Image
                    src='/images/about2.png'
                    alt='An image of a lifeguard tower on a beach, during sunset.'
                    width={1000}
                    height={1000}
                    className='about-image xl:w-[80%] xl:mt-5'
                />
            </section>
        </div>
    )
}
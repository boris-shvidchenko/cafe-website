import Link from 'next/link';

export default function Footer() {
    return (
        <div className='page-sizing flex flex-col lg:flex-row md:text-sm md:justify-between items-center space-y-5 bg-blue-200 md:bg-white pt-5 lg:pb-12 lg:text-center lg:justify-around border-t border-gray-300 body-text'>
            <section className='hidden lg:block footer-social italic'>
                <p>Mon - Fri: 7am - 8pm</p>
                <p>Saturday: 7am - 5pm</p>
                <p>Sunday: 11am - 5pm</p>
            </section>
            <section className='hidden lg:flex text-md flex-col space-y-1 ml-[105px]'>
                <Link href='/'>Home</Link>
                <Link href='/#about'>About</Link>
                <Link href='/#menu'>Menu</Link>
                <Link href='/jobs'>Jobs</Link>
            </section>
            <section className='footer-social lg:hidden'>
                <p>Mon - Fri: 7am - 8pm</p>
                <p>Saturday: 7am - 5pm</p>
                <p>Sunday: 11am - 5pm</p>
            </section>
            <section className='footer-social italic hidden lg:block lg:relative -right-4'>
                <p>3480 Oceanside Drive</p>
                <p>Santa Barbara, CA</p>
                <p>{`(248) 524-0859`}</p>
                <p>contact@westoceansidecoffee.com</p>
            </section>
            <section className='footer-social italic lg:hidden'>
                <p>3480 Oceanside Drive</p>
                <p>Santa Barbara, CA</p>
            </section>
            <section className='footer-social italic lg:hidden'>
                <p>{`(248) 524-0859`}</p>
                <p>contact@westoceansidecoffee.com</p>
            
                <section className='flex items-center space-x-3 pb-8 pt-2'>
                    <img className='cursor-pointer w-8 h-8' src='/icons/instagram-dark.png' alt='Instagram logo' />
                    <img className='cursor-pointer w-11 h-11 mb-1 relative top-0.5' src='/icons/facebook-dark.png' alt='Facebook logo' />
                    <Link href='/jobs' className='lg:hidden not-italic font-semibold text-lg pl-1'>Jobs</Link>
                </section>
            </section>
        </div>
    )
}
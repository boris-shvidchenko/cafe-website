// Components
import Image from 'next/image';

export default function JobListings() {
    return (
        <div className='page-sizing pt-10'>
            <h1 className='body-headers'>Join our Team!</h1>
            <p className='mx-10 md:ml-0'>We currently dont have any openings but will post new positions here when they are  available, check back soon! Or, send us a resume ahead of time, and we'll get back to you when an opportunity comes up.</p>
            <p className='ml-10 md:ml-0 mt-5 mb-9 text-lg italic'>contact@westoceansidecoffee.com</p>
            <Image 
                src='https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='A group of people in a coffee shop.'
                width={800}
                height={800}
                className='mx-auto mb-20'
            />
        </div>
    )
}
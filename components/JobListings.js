// Components
import Image from 'next/image';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function JobListings() {

    // Get state from Context
    const { mobileView } = useContext(Context);   

    // Styles
    const mobileText = mobileView?.width < '485' ? 'text-sm' : '';

    return (
        <div className='page-sizing pt-10 body-text'>
            <h1 className='body-headers'>Join our Team!</h1>
            <p className='mx-10 md:ml-0'>We currently have 2 openings for a Manager and a part time Barista, we will post new positions here when they are  available as well so make sure to check back soon! Dont see a posting you like? Send us a resume anyway, and we'll get back to you when another opportunity comes up.</p>
            <p className={`ml-10 md:ml-0 mt-5 text-lg italic ${mobileText}`}>contact@westoceansidecoffee.com</p>
            <h3 className='text-xl md:text-2xl ml-10 md:ml-0 mb-4 mt-5 header-text'>Open Positions</h3>
            <table className='mb-10 ml-10 md:ml-0 border-separate border-spacing-x-6 border-spacing-y-1'>
                <tbody>
                    <tr>
                        <td className={`jobs-titles ${mobileText}`}>Manager</td>
                        <td className={`jobs-link ${mobileText}`}>{`Apply Now >`}</td>
                    </tr>
                    <tr>
                        <td className={`jobs-titles ${mobileText}`}>{`Barista (Part-Time)`}</td>
                        <td className={`jobs-link ${mobileText}`}>{`Apply Now >`}</td>
                    </tr>
                </tbody>
            </table>
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
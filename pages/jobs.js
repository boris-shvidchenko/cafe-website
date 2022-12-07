// Components
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import JobListings from '../components/JobListings';
import Footer from '../components/Footer';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function Jobs() {

    // Get state from Context
    const { modal } = useContext(Context);

    return (
        <main className='flex flex-col'>
            {modal && <Modal />}
            <Navbar />
            <JobListings />
            <Footer />
        </main>
    )
}
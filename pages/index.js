// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

// Hooks
import { useState } from 'react';

export default function Home() {

  // State
  const [modal, setModal] = useState(false);

  return (
    <main className='flex flex-col'>
      {/* <Modal /> */}
      <Navbar />
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Menu /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  )
}

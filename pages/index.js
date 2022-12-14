// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function Home() {

  // Get state from Context
  const { modal } = useContext(Context);

  return (
    <main className='flex flex-col relative'>
      {modal && <Modal />}
      <div className=' bg-gradient-to-b from-white to-[#fa9d55] w-full h-[58%] sm:h-[61%] xl:h-[66%] 2xl:h-[67%] absolute top-96 -z-10'></div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  )
}

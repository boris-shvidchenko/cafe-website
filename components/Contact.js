// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function Contact() {

    // Get state from Context
    const { inputData, setInputData } = useContext(Context);    

    // Prevents default behavior of button on submit, clears input fields if they are not empty and the email is valid.
    function clearForm(event) {
        event.preventDefault();
        if (inputData.name && inputData.email && inputData.msg !== '') {
            setInputData({name:'', email:'', msg:'',})
        }
    }

    // Update the input state on change
    function changeInputState(event) {
        setInputData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className='page-sizing'>
            <div id='contact' className='nav-placeholder-div'></div>
            <h1 className='body-headers sm:text-center md:mb-7'>Get in Touch</h1>
            <section className='mx-10 md:mx-0 flex flex-col space-y-4 mb-16'>

                <section className='flex flex-col space-y-4 mb-2 sm:text-center sm:w-96 md:w-[500px] lg:w-[550px] xl:w-[750px] sm:mx-auto body-text'>
                    <p>Send us a message! Tell us what you liked or what we can improve on. We'd love to hear from you and will respond as soon as we can. Or, give us a call.</p>
                    <p className='text-xl'>{`(248) 524-0859`}</p>
                </section>
                
                <form method='post' className='flex flex-col space-y-4 sm:mx-auto sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] body-text'>

                    <section className='contact-form-section'>
                        <label className='contact-form-label' htmlFor='name'>Name</label>
                        <input onChange={changeInputState} value={inputData.name} required className='contact-form-input' id='name' name='name' type='text' />
                    </section>

                    <section className='contact-form-section'>
                        <label className='contact-form-label' htmlFor='email'>Email</label>
                        <input onChange={changeInputState} value={inputData.email} required className='contact-form-input' id='email' name='email' type='email' />
                    </section>

                    <section className='contact-form-section'>
                        <label className='contact-form-label' htmlFor='msg'>Message</label>
                        <textarea onChange={changeInputState} value={inputData.msg} required className='border outline-none max-h-72 min-h-[34px] border-gray-400 px-2 py-1 mb-4 rounded-lg shadow-md' id='message' name='msg' type='text' rows='4' cols='40'/>
                    </section>

                    <button onSubmit={(e) => clearForm(e)} className='border border-gray-400 rounded-lg shadow-md w-40 h-7 mx-auto hover:font-semibold hover:outline hover:outline-1'>Send</button>

                </form>

            </section>
        </div>
    )
}
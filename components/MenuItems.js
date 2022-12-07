// Components
import Image from 'next/image';

export default function MenuItems({ title, description, ingredients, img }) {

    // Joins the ingredients array with commas
    const ingr = ingredients.join(', ');

    return (
        <div className='drop-shadow-md shadow-lg h-[470px] md:h-[480px] lg:h-[500px] rounded-3xl cursor-pointer bg-gray-100'>
            <div className='w-72 md:w-64 lg:w-80 xl:w-[385px] overflow-hidden rounded-t-3xl'>
                <Image 
                    src={img}
                    alt={`Image of a ${title}`}
                    width={1000}
                    height={1000}
                    className='h-64 lg:h-80 object-cover rounded-t-3xl
                    transition duration-200 ease-in transform hover:scale-105'
                />
            </div>
            <h3 className='text-xl ml-3 mt-2 mb-1 font-semibold body-text'>{title}</h3>
            <p className='mx-3 mb-2 body-text'>{description}</p>
            <p className='mx-3 text-sm italic body-text text-[#3a3a3a]'>{title !== 'Sweets' && 'Contains:'} <span>{`${ingr}`}</span></p>
        </div>
    )
}
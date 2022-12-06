// Components
import Image from 'next/image';

export default function MenuItems({ title, description, ingredients, img }) {

    const ingr = ingredients.join(', ');

    return (
        <div className='border border-gray-300 shadow-md h-[470px] md:h-[480px] lg:h-[500px] rounded-3xl cursor-pointer bg-gray-200'>
            <div className='w-72 md:w-64 lg:w-80 xl:w-[385px]'>
                <Image 
                    src={img}
                    alt={`Image of a ${title}`}
                    width={1000}
                    height={1000}
                    className='h-64 lg:h-80 object-cover rounded-t-3xl'
                />
            </div>
            <h3 className='text-xl ml-3 mt-1 mb-2'>{title}</h3>
            <p className='mx-3 mb-3'>{description}</p>
            <p className='mx-3 italic'>{title !== 'Sweets' && 'Contains:'} <span>{`${ingr}`}</span></p>
        </div>
    )
}
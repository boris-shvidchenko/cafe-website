// Components
import Image from 'next/image';

export default function MenuDrinks({ title, description, ingredients, img }) {
    return (
        <div className='border border-black h-[500px] lg:h-[600px]'>
            <div className='w-72 md:w-64 lg:w-80 xl:w-[385px]'>
                <Image 
                    src={img}
                    alt={`Image of a ${title}`}
                    width={1000}
                    height={1000}
                    className='h-64 lg:h-80 object-cover'
                />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{ingredients}</p>
        </div>
    )
}
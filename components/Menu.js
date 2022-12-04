// Components
import MenuDrinks from './MenuDrinks';

// Menu data
import { drinks } from '../drinksMenuData';

export default function Menu() {

    // drinksArray will map through, and store, the date from drinksMenuData.js
    const drinksArray = drinks.map((drink) => {
        return (
            <MenuDrinks 
                title={drink.title}
                description={drink.description}
                ingredients={drink.ingredients}
                img={drink.image} 
                key={drink.id}
            />
        )
    })

    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <div id='menu' className='nav-placeholder-div'></div>
            <h1 className='body-headers lg:mb-6'>Our Products</h1>
            <p className='mx-10 md:mx-0'>We serve traditional coffee drinks, hot and cold, and have a selection of daily prepped foods. We also offer a selection soft drinks and snacks.</p>
            <section className='mb-20'>
                <h3 className='text-lg sm:text-xl md:text-2xl ml-10 md:ml-0 my-4 lg:mb-8'>Drinks</h3>
                <section className='flex space-x-10 md:space-x-20 mx-10 md:mx-0 overflow-x-auto border-x border-gray-300'>
                    {drinksArray}
                </section>
            </section>
        </div>
    )
}
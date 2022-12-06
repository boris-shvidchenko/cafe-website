// Components
import MenuItems from './MenuItems';

// Menu data
import { drinks } from '../drinksMenuData';
import { food } from '../foodMenuData';

export default function Menu() {

    // drinksArray will map through, and store, the data from drinksMenuData.js
    const drinksArray = drinks.map((drink) => {
        return (
            <MenuItems 
                title={drink.title}
                description={drink.description}
                ingredients={drink.ingredients}
                img={drink.image} 
                key={drink.id}
            />
        )
    })

    // foodArray will map through, and store, the data from foodMenuData.js
    const foodArray = food.map((item) => {
        return (
            <MenuItems 
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                img={item.image} 
                key={item.id}
            />
        )
    })

    return (
        <div className='page-sizing mt-5 md:mt-10'>
            <div id='menu' className='nav-placeholder-div'></div>
            <h1 className='body-headers lg:mb-6'>Our Products</h1>
            <p className='mx-10 md:mx-0'>We serve traditional coffee drinks, hot and cold, and have a selection of daily prepped foods. We also offer a selection soft drinks and snacks.</p>
            <section className='mb-10'>
                <h3 className='text-lg sm:text-xl md:text-2xl ml-10 md:ml-0 my-4 lg:mb-8'>Drinks</h3>
                <section className='flex space-x-10 md:space-x-20 mx-10 md:mx-0 overflow-x-auto pb-7 scrollbar-thin scrollbar-thumb-gray-500'>
                    {drinksArray}
                </section>
            </section>
            <section className='mb-10'>
                <h3 className='text-lg sm:text-xl md:text-2xl ml-10 md:ml-0 my-4 lg:mb-8'>Food</h3>
                <section className='flex space-x-10 md:space-x-20 mx-10 md:mx-0 overflow-x-auto pb-6 lg:pb-7 scrollbar-thin scrollbar-thumb-gray-500'>
                    {foodArray}
                </section>
            </section>
        </div>
    )
}
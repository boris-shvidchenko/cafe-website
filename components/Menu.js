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
        <div className='relative'>
            <div className='page-sizing mt-5 md:mt-10 lg:mt-14 '>
                <div id='menu' className='nav-placeholder-div'></div>
                <h1 className='body-headers lg:mb-6'>Our Products</h1>
                <p className='mx-10 md:mx-0 body-text'>We serve traditional coffee drinks, hot and cold, and have a selection of daily prepped foods. We also offer a selection soft drinks and snacks.</p>
                <section className='mb-6'>
                    <h3 className='menu-item-headers'>Drinks</h3>
                    <section className='menu-item-section'>
                        {drinksArray}
                    </section>
                </section>
                <section className='mb-6 md:mb-10 lg:mb-14'>
                    <h3 className='menu-item-headers'>Food</h3>
                    <section className='menu-item-section lg:pb-7'>
                        {foodArray}
                    </section>
                </section>
            </div>
        </div>
    )
}
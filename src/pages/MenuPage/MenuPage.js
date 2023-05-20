import React, { useState } from 'react'
import ItemHeader from '../../component/ItemHeader/ItemHeader'
import "./MenuPage.css"
import { hamburgerData, pizzaData, snackData, drinkData } from '../../Data'
import MenuItem from '../../component/MenuItem/MenuItem'

export default function MenuPage() {

    const [headerData, setHeaderData] = useState({
        title: 'منوی غذایی فومو',
        route: 'منو',
        link: '/menu'
    })
    
    const [hamburgerMenu, setHamburgerMenu] = useState(hamburgerData)
    const [pizzaMenu, setPizzaMenu] = useState(pizzaData)
    const [snackMenu, setSnackMenu] = useState(snackData)
    const [drinkMenu, setDrinkMenu] = useState(drinkData)

    return (
        <>
            <ItemHeader {...headerData} />
            <div className="allMenu">
                
                <div className="allMenuWrapper row">

                    <div className="menu col-lg-5 col-md-6 col-12">
                        <div className="menuTitle">
                            <h3 className="menuTitleText">همبرگر</h3>
                            <img className='menuTitleImg' src="/images/menu/hamburger.jpg" alt="hamberger" />
                        </div>
                        {hamburgerMenu.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </div>

                    <div className="menu col-lg-5 col-md-6 col-12">
                        <div className="menuTitle">
                            <h3 className="menuTitleText">پیتزا</h3>
                            <img className='menuTitleImg' src="/images/menu/pizza.jpg" alt="pizza" />
                        </div>
                        {pizzaMenu.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </div>

                    <div className="menu col-lg-5 col-md-6 col-12">
                        <div className="menuTitle">
                            <h3 className="menuTitleText">اسنک</h3>
                            <img className='menuTitleImg' src="/images/menu/snack.jpg" alt="snack" />
                        </div>
                        {snackMenu.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </div>

                    <div className="menu col-lg-5 col-md-6 col-12">
                        <div className="menuTitle">
                            <h3 className="menuTitleText">نوشیدنی</h3>
                            <img className='menuTitleImg' src="/images/menu/drink.jpg" alt="drink" />
                        </div>
                        {drinkMenu.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}

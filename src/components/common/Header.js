// Components
// ================================================================================================
import { ReactComponent as CartIcon } from "./../../assets/icons/cart.svg";
import Cart from "./../cart/Cart";

// React
// ================================================================================================
import { useState } from 'react';

function Header({productsInCart, quantityChange, deleteProduct, purchaseProduct}) {
    const [showCart, setShowCart] = useState(false);

    // toggles the cart
    const handleToggleCart = () => {
        setShowCart(!showCart);
    }

    // calculate the number of total items in the cart
    const calcTotalItems = () => {
        let total = 0;

        total = productsInCart.reduce(
            (accumulator, currentObj) => accumulator + currentObj.quantity, 0
        );

        return total;
    }

    return (
        <header className="border-bottom py-3 d-flex align-items-center justify-content-between">
            <img
                alt="logo"
                className="h-5"
                src={require("./../../assets/images/logo.png")}
            />

            <div className="cursor-pointer position-relative">
                <CartIcon
                    onClick={() => {handleToggleCart()}}
                    className="cursor-pointer"
                />

                { productsInCart.length > 0 ?
                    <p
                        className="align-items-center bg-purple d-flex font-small font-white
                            justify-content-center h-1 position-absolute right-n-6px rounded-circle top-n-6px w-1"
                    >
                        {calcTotalItems()}
                    </p> : ""
                }

                { showCart ?
                    <Cart
                        productsInCart={ productsInCart }
                        quantityChange={ quantityChange }
                        deleteProduct = { deleteProduct }
                        purchaseProduct = { purchaseProduct }
                    /> : ""
                }
            </div>
        </header>
    )
}

export default Header;
// Components
// ================================================================================================
import { ReactComponent as BinIcon } from "./../../assets/icons/bin.svg";

function Cart({productsInCart, quantityChange, deleteProduct, purchaseProduct}) {
    // change a product's quantity
    const handleQuantity = (action, index) => {
        const input = { action: action, index: index };
        quantityChange(input);
    }

    // delete a product in the cart
    const handleDeleteProduct = (index) => {
        deleteProduct(index);
    }

    // purchase one or more products
    const handlePurchaseProduct = () => {
        purchaseProduct(productsInCart);
    }

    // calculate total value of all items in the cart
    const calcTotal = () => {
        let total = 0;

        total = productsInCart.reduce((acc, obj) => {
            return acc + (obj.price * obj.quantity);
        }, 0);

        return total;
    }

    // no item in cart
    if (productsInCart.length === 0) {
        return (
            <aside className="animate__animated animate__fadeIn bg-white border cart p-3 position-absolute rounded top-2 right-0 shadow w-30 z-1000">
                <p className="bold border-bottom font-purple pb-3 mb-3">Shopping Cart</p>

                <p className="text-center">No item in cart</p>
            </aside>
        )
    }

    // has items in cart
    return (
        <aside className="animate__animated animate__fadeIn bg-white border cart p-3 position-absolute rounded top-2 right-0 shadow w-30 z-1000">
            <p className="bold border-bottom font-purple pb-3 mb-3">Shopping Cart</p>

            {/* List render all products */}
            {productsInCart.map((product, index) => (
                <div
                    className="animate__animated animate__fadeIn d-flex justify-content-between pb-3 w-100 align-items-center"
                    key={`${product.name}-${index}`}
                >
                    <div className="cart-item d-flex align-items-center gap-3">
                        <p className="bold w-8 text-capitalize text-truncate">{product.name}</p>

                        <div className="d-flex text-center mr-3 w-8">
                            <button
                                disabled={product.quantity <= 1}
                                onClick={() => { handleQuantity("decrement", index) }}
                                className="bg-gray bold font-purple button rounded-top-left rounded-bottom-left w-100 p-1"
                            >
                                -
                            </button>

                            <p className="bg-gray w-100 p-1">{product.quantity}</p>

                            <button
                                onClick={() => { handleQuantity("increment", index) }}
                                className="bg-gray bold font-purple button rounded-top-right rounded-bottom-right w-100 p-1"
                            >
                                +
                            </button>
                        </div>

                        <p>£{product.price * product.quantity}</p>
                    </div>

                    <BinIcon
                        onClick={() => { handleDeleteProduct(index) }}
                    />
                </div>
            ))}

            <p className="bold font-purple pb-3">Total: £{calcTotal()}</p>

            <button
                onClick={() => { handlePurchaseProduct() }}
                className="btn-success button rounded p-2 w-100"
            >
                Purchase
            </button>
        </aside>
    )
}

export default Cart;
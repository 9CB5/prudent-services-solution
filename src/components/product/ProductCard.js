import { useState } from 'react';

function ProductCard({ product, addToCart, productsPurchased }) {
    const [quantity, setQuantity] = useState(1);

    // change a product's quantity
    const handleQuantity = (action) => {
        action === "increment" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    }

    // add a product to cart
    const handleAddToCart = (product) => {
        let productToAdd = { ...product, quantity };  // add quantity to the product object
        addToCart(productToAdd)// pass product to parent component
    }

    return (
        <aside
            className={"border p-3 card-custom rounded shadow-sm text-capitalize z-n-1 " +
                (productsPurchased.findIndex(p => p.name === product.name) > -1 ? "bg-purple-light border-purple" : "")}
        >
            {/* Product info */}
            <img
                alt={product.name}
                className="d-block h-10 mb-3 mx-auto rounded w-10"
                src={require(`../../assets/images/${product.source}.jpg`)}
            />

            <p className="bold">{ product.name }</p>

            <p className="bold font-purple">£{ product.price }</p>

            {/* Quantity */}
            <div className="d-flex text-center pb-3">
                <button
                    disabled={quantity <= 1}
                    onClick={() => {handleQuantity("decrement")}}
                    className="bg-gray bold font-purple button rounded-top-left rounded-bottom-left w-100 p-1"
                >
                    -
                </button>

                <p className="bg-gray w-100 p-1">{quantity}</p>

                <button
                    onClick={() => { handleQuantity("increment") }}
                    className="bg-gray bold font-purple button rounded-top-right rounded-bottom-right w-100 p-1"
                >
                    +
                </button>
            </div>

            {/* Add to cart */}
            <button
                onClick={() => {handleAddToCart(product)}}
                className="box-shadow-purple button bg-purple w-100 p-1 rounded font-white"
            >
                Add to cart
            </button>
        </aside>
    )
}

export default ProductCard;
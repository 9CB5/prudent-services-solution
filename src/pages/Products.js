// Components
// ================================================================================================
import ProductCard from "./../components/product/ProductCard";

function Products({ products, productsPurchased, addToCart }) {

    // No items found
    if (products.length <= 0) {
        return (<p className="pt-3">No items to show</p>);
    }

    // Has items
    return (
        // <main className="d-flex flex-wrap gap-3 grid justify-content-center pt-3 w-100">
        <main className="grid pt-3 gap-3">
            {products.map((product, index) => (
                <ProductCard
                    addToCart={ addToCart }
                    key={ `${product.name}-${index}` }
                    product={ product }
                    productsPurchased={ productsPurchased }
                />
            ))}
        </main>
    );
}

export default Products;
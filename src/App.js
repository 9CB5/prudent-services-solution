
// CSS
// ================================================================================================
import './App.css';

// Components
// ================================================================================================
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductFilter from './components/product/ProductFilter';

// Pages
// ================================================================================================
import Products from "./pages/Products";

// Dummy data
// ================================================================================================
import { products } from "./data/products";

// React
// ================================================================================================
import { useState } from 'react';


function App() {
    const [productsFiltered, setFilterProducts] = useState([...products]);  // products filtered
    const [productsSelected, setSelectedProducts] = useState([]);  // products in cart
    const [productsPurchased, setPurchasedProducts] = useState([])  // products purchased

    // add product to cart
    const handleAddToCart = (product) => {
        setSelectedProducts([...productsSelected, product]);  // add to cart
    }

    // change quantity of a product in cart
    const handleQuantityChange = (input) => {
        let selectedProducts = [...productsSelected];

        if (input.action === "increment") {
            selectedProducts[input.index]["quantity"]++;
        } else {
            selectedProducts[input.index]["quantity"]--;
        }

        setSelectedProducts([...selectedProducts]);
    }

    // delete a product from the cart
    const handleDeleteProduct = (index) => {
        let selectedProducts = [...productsSelected];
        selectedProducts.splice(index, 1);

        setSelectedProducts([...selectedProducts]);
    }

    // purchase one or more products
    const handlePurchaseProduct = (products) => {
        const combinedProducts = [...products, ...productsPurchased];  // combine array

        // check for duplicates
        const uniqueProducts = combinedProducts.reduce((accumulator, currentObject) => {

            // check if the name already exists in the accumulator
            const isNameExists = accumulator.some(obj => obj.name === currentObject.name);

            // if not, add it to the accumulator
            if (!isNameExists) {
              accumulator.push(currentObject);
            }

            return accumulator;
          }, []);

          setPurchasedProducts([...uniqueProducts]);
          setSelectedProducts([]);  // empty the cart
    }

    const handleChangeFilter = (filter) => {
        const allProducts = [...products];

        if (filter === "all") {
            setFilterProducts([...products]);
            // ------------------------------------------------------------------------------------
        } else if (filter === "purchased") {
            const purchased = allProducts.filter(allProduct =>
                productsPurchased.some(productPurchased => productPurchased.name === allProduct.name)
            );

            setFilterProducts([...purchased]);
            // ------------------------------------------------------------------------------------
        } else if (filter === "not-purchased") {
            const notPurchased = allProducts.filter(allProduct =>
                !productsPurchased.some(productPurchased => productPurchased.name === allProduct.name)
            );

            setFilterProducts([...notPurchased]);
        }
    }

    return (
        <div className="">
            <Header
                productsInCart={ [...productsSelected] }
                quantityChange={ handleQuantityChange }
                deleteProduct = { handleDeleteProduct }
                purchaseProduct = { handlePurchaseProduct }
            />

            <ProductFilter
                changeFilter={ handleChangeFilter }
            />

            <Products
                products={ productsFiltered }
                productsPurchased={ productsPurchased }
                addToCart={ handleAddToCart }
            />

            {/* <Footer/> */}
        </div>
    );
}

export default App;

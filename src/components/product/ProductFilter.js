function ProductFilter({changeFilter}) {

    // change the filter
    const handleChangeFilter = (event) => {
        changeFilter(event.target.value);
    }

    return(
        <section className="align-items-center d-flex gap-3 pt-3">
            <label htmlFor="product-filter">Filter: </label>

            <select
                onChange={handleChangeFilter}
                className="border p-1 rounded"
                id="product-filter"
                name="product-filter"
            >
                <option value="all">All</option>
                <option value="purchased">Purchased</option>
                <option value="not-purchased">Not purchased</option>
            </select>
        </section>
    )
}

export default ProductFilter;
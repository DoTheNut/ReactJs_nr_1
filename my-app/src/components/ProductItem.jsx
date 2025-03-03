function ProductItem({ product, addToCart }) {
    return (
        <div>
            <h3>{product.name} - ${product.price}</h3>
            <button onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
        </div>
    );
}

export default ProductItem;

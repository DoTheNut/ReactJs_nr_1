function Cart({ cart, removeFromCart }) {
    return (
        <div>
            <h2>Krepšelis</h2>
            {cart.length === 0 ? <p>Krepšelis tuščias.</p> : cart.map((item, index) => (
                <div key={index}>
                    <span>{item.name} - ${item.price}</span>
                    <button onClick={() => removeFromCart(index)}>Pašalinti</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;

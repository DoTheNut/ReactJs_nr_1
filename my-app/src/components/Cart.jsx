function Cart({ cart, removeFromCart }) {
    return (
        <div>
            <h2>Krepšelis</h2>
            {cart.length === 0 ? <p>Krepšelis tuščias.</p> : cart.map((item) => (
                <div key={item.id}>
                    <span>{item.name} - ${item.price} - Kiekis: {item.quantity}  </span>
                    <button onClick={() => removeFromCart(item.id)}>Pašalinti</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;

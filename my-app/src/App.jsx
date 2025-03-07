import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import GuessGame from './components/GuessGame';

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };



    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Headphones", price: 200 }
    ];

    return (
        <div>
            <h1>Užduočių sąrašas</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />

            <h1>Pirkinių Krepšelis</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />

            <h1>Skaičių spėjimo žaidimas</h1>
            <GuessGame />
        </div>
    );
}

export default App;

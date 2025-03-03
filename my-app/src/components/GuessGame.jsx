import { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

function GuessGame() {
    const [targetNumber, setTargetNumber] = useState(0);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    const handleGuess = () => {
        const num = parseInt(guess, 10);

        if (!guess || isNaN(num)) {
            setMessage("Įveskite galiojantį skaičių.");
            return;
        }

        setAttempts(prevAttempts => prevAttempts + 1); // Correct increment logic

        if (num < targetNumber) {
            setMessage("Bandyk didesnį!");
        } else if (num > targetNumber) {
            setMessage("Bandyk mažesnį!");
        } else {
            setMessage(`Teisingai! Skaičius buvo ${targetNumber}. Bandymų: ${attempts + 1}`);
        }
    };

    return (
        <div>
            <GuessForm guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
            <Message message={message} />
        </div>
    );
}

export default GuessGame;

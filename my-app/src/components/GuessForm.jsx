

function GuessForm({ guess, setGuess, handleGuess }) {
    const onChange = (event) => {
        setGuess(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        handleGuess();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="number"
                value={guess}
                onChange={onChange}
                placeholder="Įveskite skaičių"
            />
            <button type="submit">Spėti</button>
        </form>
    );
}

export default GuessForm;


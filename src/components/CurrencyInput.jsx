const CurrencyInput = ({ amount, setAmount }) => {
    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handleBlur = (e) => {
        setAmount(Number(e.target.value.replace(/[^0-9.-]+/g, "")).toLocaleString("en-US", {style:"currency", currency:"GBP"}));
    }

    return (
        <input
            type='text'
            inputMode='numeric'
            required
            value={ amount }
            onChange={ handleChange }
            onBlur={ handleBlur }
        />
    );
};

export default CurrencyInput;
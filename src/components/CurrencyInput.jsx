import { useEffect } from "react";

const CurrencyInput = ({ amount, setAmount }) => {
    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const formatCurrency = () => {
        setAmount(Number(amount.replace(/[^0-9.-]+/g, "")).toLocaleString('en-GB', {style:"currency", currency: 'GBP'}));
    }

    useEffect(() => {
        formatCurrency();
    }, []);

    return (
        <input
            type='text'
            inputMode='numeric'
            required
            value={amount}
            onChange={handleChange}
            onBlur={formatCurrency}
        />
    );
};

export default CurrencyInput;
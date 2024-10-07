const DropBox = ({ options, value, setValue, required }) => {
    return (
        <select
            {...required}
            value={ value }
            onChange={(e) => setValue(e.target.value)}
        >
            <option disabled hidden selected>-select an option-</option>
            { options.map((option, i) => (
                <option value={option.value} key={i}>{option.title}</option>
            )) }
        </select>
    );
};

export default DropBox;
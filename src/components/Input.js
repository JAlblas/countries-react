const Input = ({ handleChange }) => {
    return (
        <div>
            <label htmlFor="search">Find countries</label>
            <br />
            <input id="search" onChange={handleChange} />
        </div>
    );
};

export default Input;
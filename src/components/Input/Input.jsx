import "./input.css"

const Input = ({label, placeholder, value, setValue, invalid}) => {
    return <>
        <label>{label}</label>
        <input onChange={(e) => setValue(e.currentTarget.value)} value={value} className={invalid ? 'input input-unvalid' : 'input'} placeholder={placeholder}/>
    </>
}

export default Input
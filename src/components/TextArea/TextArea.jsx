import "./textArea.css"

const TextArea = ({label, placeholder, value, setValue}) => {
    return <>
        <label>{label}</label>
        <textarea onChange={(e) => setValue(e.currentTarget.value)} value={value} class="textarea" placeholder={placeholder}/>
    </>
}

export default TextArea
import "./checkbox.css"

const Checkbox = ({ label, setIsChecked, checked }) => {
  return (
    <div class="checkbox-wrapper">
        <input checked={checked} id={label} class="substituted" type="checkbox" />
        <label onClick={() => setIsChecked(prev => !prev)} for={label}>{label}</label>
    </div>
  );
};
export default Checkbox;



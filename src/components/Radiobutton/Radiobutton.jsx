import "./radiobutton.css"

const Radiobutton = ({ label, setIsChecked, checked, name }) => {
  return (
    <div class="radio">
      <input checked={checked} id={name + label} name={name} type="radio"/>
      <label onClick={() => setIsChecked(prev => !prev)} for={name + label} class="radio-label">{label}</label>
    </div>
  );
};
export default Radiobutton;



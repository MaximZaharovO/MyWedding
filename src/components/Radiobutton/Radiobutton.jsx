import "./radiobutton.css"

const Radiobutton = ({ label, setLabel, checked, name }) => {
  return (
    <div class="radio">
      <input id={name + label} name={name} type="radio"/>
      <label onClick={() => setLabel(label)} for={name + label} class="radio-label">{label}</label>
    </div>
  );
};
export default Radiobutton;



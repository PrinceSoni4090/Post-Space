import "./Toggle.css"
import { CiLight } from "react-icons/ci";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container text-white ">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"><CiLight size={'2.5em'} /></label> 
    </div>
  );
};
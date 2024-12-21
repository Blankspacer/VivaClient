import PropTypes from "prop-types";

const CheckBox = ({ name, id, handleCheck, label }) => {
  return (
    <div className="flex items-center gap-1">
      <input
        onChange={(e) => {
          handleCheck(e, id, label);
        }}
        type="radio"
        id={id}
        name={label}
        value={name}
        className="appearance-none rounded-full checked:bg-[#7e6e2a] border border-[#7e6e2a] h-3 w-3"
      />
       <label for={id}>{name}</label>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  handleCheck: PropTypes.func,
};

export default CheckBox;

import React from "react";

const CustomInput = (props) => {
  const {
    type,
    placeholder,
    i_id,
    i_class,
    name,
    val,
    onChng,
    onBlr,
    disabled,
  } = props;
  return (
    <div className="form-floating mt-1 mb-1">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onBlr}
        disabled={disabled}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;

import React from "react";

const MultiLineInput = ({
  onChange,
  maxLength,
  placeholder,
  eyebrowText,
  className,
  value,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className={"singleInput " + className}>
      <span className="eyebrow">{eyebrowText}</span>
      <textarea
        value={value > 0 ? placeholder : value}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        className="descriptionInput"
      ></textarea>
    </div>
  );
};

export default MultiLineInput;

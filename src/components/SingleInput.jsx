import React from "react";

const SingleInput = ({
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
      <input
        value={value}
        maxLength={maxLength > 0 ? maxLength : 50}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default SingleInput;

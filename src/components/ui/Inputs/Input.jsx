import React, { useRef } from 'react';
import cn from 'classnames';

<<<<<<< HEAD
const Input = ({ name, value, onChange, type, placeholder, className }) => {
  const inputRef = useRef(null);
=======
const Input = ({ name, value, onChange, type = 'text', placeholder, className }) => {
	const inputRef = useRef(null);
>>>>>>> 0a91851f5956336a2df7d173d9e1672f46d0b0ed

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

<<<<<<< HEAD
  return (
    <div className={cn('input__wrapper', className)}>
      <input
        ref={inputRef}
        className={cn('input', className)}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
=======
	return (
		<div className={cn("input__wrapper", className)}>
			<input
				ref={inputRef}
				className={cn("input", className)}
				placeholder={placeholder}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
>>>>>>> 0a91851f5956336a2df7d173d9e1672f46d0b0ed
};

export default Input;

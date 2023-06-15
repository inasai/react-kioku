import React, { useRef } from 'react';
import cn from 'classnames';;

const Input = ({ name, value, onChange, type = 'text', className }) => {
	const inputRef = useRef(null);

	const handleChange = (e) => {
		const value = e.target.value;
		onChange(value)
	}

	return (
		<div className={cn("input__wrapper", className)}>
			<input
				ref={inputRef}
				className={cn("input", className)}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	ErrorText,
	FalseRadio,
	InputContainer,
	InputMainWrapper,
	InputWrapper,
	RadioInput,
	RadioWrapper,
	SelectContainer,
	TextAreaWrapper,
} from './inputStyles';
import { v4 } from 'uuid';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowAltCircleDown,
	faEye,
	faEyeSlash,
	faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useValidationFunctions } from '../../hooks/validationFunctions';
import { useGlobalFunctions } from '../../hooks/globalFunctions';

const Input = ({
	label,
	type,
	fixed,
	options,
	name,
	id,
	rows,
	cols,
	onChange,
	value,
	defaultValue,
	val,
	setVal,
	validate,
	special,
	checked,
	disabled,
	dynamicLabel,
	placeholder,
}) => {
	const animateLabel = e => {
		e.target.value === ''
			? e.target.classList.remove('active-input')
			: e.target.classList.add('active-input');
	};

	useEffect(() => {
		const inputEL = document.querySelector(`#${id}`);
		if (value && value !== '' && inputEL) {
			inputEL.classList.add('active-input');
		} else if (defaultValue && defaultValue !== '' && inputEL) {
			inputEL.classList.add('active-input');
		}
	}, [value, defaultValue, id]);

	//state for password
	const [unveil, setUnveil] = useState(false);

	const toggleUnveil = e => {
		const inputId = e.currentTarget.id.replace('Eye', '');
		const passInput = document.querySelector(`#${inputId}`);
		setUnveil(!unveil);
		if (passInput.type === 'password') {
			passInput.type = 'text';
			passInput.special = 'raw';
		} else {
			passInput.type = 'password';
		}
	};	

	const blur = e => {
		animateLabel(e);
		validate && blurFunc(e, val, setVal, special);
	};

	const handleChange = e => {
		animateLabel(e);
		onChange && onChange(e);
		validate && changeFunc(e, val, setVal, special);
	};

	const { isNumberKey } = useGlobalFunctions();

	if (type === 'select') {
		return (
			<InputMainWrapper fixed={fixed}>
				<InputWrapper>
					<SelectContainer
						id={id}
						name={name}
						onChange={handleChange}
						onBlur={blur}
						value={value}
						disabled={disabled}
						placeholder={placeholder}
					>
						<option value='select' className='grey-out'>
							{dynamicLabel ? label : `Select ${label}`}
						</option>
						{options.map(option => {
							return (
								<option key={v4()} value={option}>
									{label === 'Region'
										? `${option} Region`
										: option}
								</option>
							);
						})}
					</SelectContainer>
					<FontAwesomeIcon
						icon={faArrowAltCircleDown}
						className='select-arrow'
						style={{ cursor: 'pointer' }}
					/>
				</InputWrapper>
				<ErrorText>
					{validate &&
						val[`${id}Error`] !== '' &&
						val[`${id}Error`] && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{validate && val[`${id}Error`]}
				</ErrorText>
			</InputMainWrapper>
		);
	} else if (type === 'password') {
		return (
			<InputMainWrapper fixed={fixed}>
				<InputWrapper>
					<InputContainer
						type={type}
						id={id}
						name={name}
						onBlur={blur}
						autoComplete='on'
						onChange={handleChange}
						value={value}
						disabled={disabled}
						placeholder={placeholder}
					/>
					<label htmlFor={id}>{label}</label>
					{unveil ? (
						<FontAwesomeIcon
							icon={faEye}
							onClick={toggleUnveil}
							id={id + 'Eye'}
						/>
					) : (
						<FontAwesomeIcon
							icon={faEyeSlash}
							onClick={toggleUnveil}
							id={id + 'Eye'}
						/>
					)}
				</InputWrapper>
				<ErrorText>
					{validate &&
						val[`${id}Error`] !== '' &&
						val[`${id}Error`] && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{validate && val[`${id}Error`]}
				</ErrorText>
			</InputMainWrapper>
		);
	} else if (type === 'text-area') {
		return (
			<InputMainWrapper fixed={fixed}>
				<TextAreaWrapper vertical left>
					<label htmlFor={id}>{label}</label>
					<textarea
						id={id}
						name={name}
						rows={rows}
						cols={cols}
						onChange={handleChange}
						onBlur={blur}
						value={value}
						disabled={disabled}
						placeholder={placeholder}
					/>
				</TextAreaWrapper>
				<ErrorText>
					{validate &&
						val[`${id}Error`] !== '' &&
						val[`${id}Error`] && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{validate && val[`${id}Error`]}
				</ErrorText>
			</InputMainWrapper>
		);
	} else if (type === 'data-list') {
		return (
			<InputMainWrapper fixed={fixed}>
				<InputWrapper>
					<InputContainer
						type='text'
						id={id}
						fixed={fixed}
						name={name}
						list={id + 'List'}
						onBlur={blur}
						onChange={handleChange}
						value={value}
						defaultValue={defaultValue}
						autoComplete='off'
						disabled={disabled}
						placeholder={placeholder}
					/>
					<datalist id={id + 'List'}>
						{options.map(option => {
							return <option key={v4()} value={option} />;
						})}
					</datalist>
					<label htmlFor={id}>{label}</label>
				</InputWrapper>
				<ErrorText>
					{validate &&
						val[`${id}Error`] !== '' &&
						val[`${id}Error`] && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{validate && val[`${id}Error`]}
				</ErrorText>
			</InputMainWrapper>
		);
	} else if (type === 'radio') {
		return (
			<RadioWrapper>
				<RadioInput
					type='radio'
					name={name}
					id={id}
					defaultChecked={checked}
					onChange={onChange}
					disabled={disabled}
					placeholder={placeholder}
				/>
				<FalseRadio />
			</RadioWrapper>
		);
	}
	return (
		<InputMainWrapper fixed={fixed}>
			<InputWrapper>
				<InputContainer
					type={type}
					id={id}
					fixed={fixed}
					name={name}
					onBlur={blur}
					onChange={handleChange}
					value={value}
					defaultValue={defaultValue}
					min={type === 'number' ? 0 : undefined}
					onKeyPress={type === 'number' ? isNumberKey : undefined}
					disabled={disabled}
					placeholder={placeholder}
				/>
				<label htmlFor={id}>{label}</label>
			</InputWrapper>
			<ErrorText>
				{validate && val[`${id}Error`] !== '' && val[`${id}Error`] && (
					<FontAwesomeIcon icon={faExclamationCircle} />
				)}
				{validate && val[`${id}Error`]}
			</ErrorText>
		</InputMainWrapper>
	);
};

export default Input;

Input.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validate: PropTypes.bool.isRequired,
};

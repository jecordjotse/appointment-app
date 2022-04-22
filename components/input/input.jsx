import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	Arrow,
	ErrorText,
	FalseRadio,
	InputContainer,
	InputMainWrap,
	InputWrap,
	RadioInput,
	RadioWrap,
	SelectContainer,
	TextAreaWrap,
	SelectContainer1
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
// import { useGlobalFunctions } from '../../hooks/globalFunctions';	
import {InputLabel, MenuItem} from '@mui/material';

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
	// validate,
	special,
	checked,
	disabled,
	dynamicLabel,
	placeholder,
	style,
	location,
	onKeyUpCapture,
}) => {
	const [arrowTurn, setArrowTurn] = useState(false);
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

	// const { isNumberKey } = useGlobalFunctions();

	if (type === 'select') {
		return (
			<InputMainWrap fixed={fixed} style={style.component === "wrap"? style.style:{display:"auto"}}>
				<InputWrap>

  					{!!label? (<InputLabel id={`select-label-${id}`}>{label}</InputLabel>):(<></>)}
					<SelectContainer1
						id={id}
						name={name}
						// onChange={handleChange}
						// onBlur={blur}
						value={value}
						disabled={disabled}
						labelId={`select-label-${id}`}
						placeholder={placeholder}
						displayEmpty={!!label? "false":"true"}
						inputProps={!label? { 'aria-label': 'Without label' }:{}}
					>
						<MenuItem value="" className='grey-out' disabled>
							<em>{dynamicLabel ? label : !!label? `${label.toUpperCase()}`:`${placeholder.toUpperCase()}`}</em>
						</MenuItem>
						{options.map(option => {
							return (
								<MenuItem key={v4()} value={Object.keys(option)[0]}>
									{`${Object.values(option)[0]}`}
								</MenuItem>
							);
						})}
					</SelectContainer1>
				</InputWrap>
				<ErrorText>
					{false && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
				</ErrorText>
			</InputMainWrap>
		);
	} else if (type === 'password') {
		return (
			<InputMainWrap fixed={fixed}>
				<InputWrap>
					<InputContainer
						type={type}
						id={id}
						name={name}
						// onBlur={blur}
						autoComplete='on'
						// onChange={handleChange}
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
				</InputWrap>
				<ErrorText>
					{false && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{/* {validate && val[`${id}Error`]} */}
				</ErrorText>
			</InputMainWrap>
		);
	} else if (type === 'text-area') {
		return (
			<InputMainWrap fixed={fixed}>
				<TextAreaWrap vertical left 
						location={location}>
					{label && (<label htmlFor={id}>{label}</label>)}
					<textarea
						id={id}
						name={name}
						rows={rows}
						cols={cols}
						// onChange={handleChange}
						// onBlur={blur}
						value={value}
						disabled={disabled}
						placeholder={placeholder}
						location={location}
					/>
				</TextAreaWrap>
				{location!=="footer" && <ErrorText>
					{false && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{/* {validate && val[`${id}Error`]} */}
				</ErrorText>}
			</InputMainWrap>
		);
	} else if (type === 'data-list') {
		return (
			<InputMainWrap fixed={fixed}>
				<InputWrap>
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
						location={"footer"}
					/>
					<datalist id={id + 'List'}>
						{options.map(option => {
							return <option key={v4()} value={option} />;
						})}
					</datalist>
					<label htmlFor={id}>{label}</label>
				</InputWrap>
				<ErrorText>
					{/* {validate &&
						val[`${id}Error`] !== '' &&
						val[`${id}Error`] && (
							<FontAwesomeIcon icon={faExclamationCircle} />
						)}
					{validate && val[`${id}Error`]} */}
				</ErrorText>
			</InputMainWrap>
		);
	} else if (type === 'radio') {
		return (
			<RadioWrap>
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
			</RadioWrap>
		);
	}
	return (
		<InputMainWrap fixed={fixed} style={style.component === "wrap"? style.style:{display:"auto"}}>
			<InputWrap style={location==="footer" && style.style?.justifyItems==="right"? {display:"grid",justifyItems:"right"}:{display:"auto"}}>
				{location!=="footer" && <label htmlFor={id}>{label}</label>}
				<InputContainer
					type={type}
					id={id}
					fixed={fixed}
					name={name}
					// onBlur={blur}
					// onChange={handleChange}
					value={value}
					defaultValue={defaultValue}
					min={type === 'number' ? 0 : undefined}
					onKeyUpCapture={onKeyUpCapture}
					// onKeyPress={type === 'number' ? isNumberKey : undefined}
					disabled={disabled}
					placeholder={placeholder}
					location={location}
					style={style.component === "input"? style.style:{display:"auto"}}
				/>
			</InputWrap>
			{location!=="footer" && <ErrorText>
				{false && (
					<FontAwesomeIcon icon={faExclamationCircle} />
				)}
				{/* {validate && val[`${id}Error`]} */}
			</ErrorText>}
		</InputMainWrap>
	);
};

export default Input;

Input.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	validate: PropTypes.bool.isRequired,
};

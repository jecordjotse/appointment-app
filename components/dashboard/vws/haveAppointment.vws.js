import React from "react";

const HaveAppointment = () => {
	const handleChange = () => {};
	return (
		<>
			<h2>APPROVE APPOINTMENT</h2>
			<div>
				<div>Jane Doe</div>
				<div>63fa020321</div>
			</div>
			<div>
				<p>About You</p>
			</div>
			<div>
				<label htmlFor="topic">Topic</label>
				<input type="text" name="topic" id="topic" />
			</div>
			<div>
				<label htmlFor="description">Notes</label>
				<textarea
					name="description"
					id="description"
					cols="30"
					rows="10"
					onChange={handleChange}
				></textarea>
			</div>
			<div>
				<div>
					<button>END</button>
				</div>
				<div>
					<button>SAVE</button>
				</div>
			</div>
		</>
	);
};

export default HaveAppointment;

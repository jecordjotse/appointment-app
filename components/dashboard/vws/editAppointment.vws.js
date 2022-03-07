import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAppointmentsStart } from "../../../lib/redux/edit-appointment/edit-appointment.actions";
import dateFormater from "../../../utils/dateFormater";

const EditAppointment = () => {
  const dispatch = useDispatch();
  const [editingAppointment, setEditingAppointment] = useState({});
  const { current_appointment } = useSelector((state) => state.editAppointment);
  const handleChange = (e, field) => {
    if (field === "start")
      setEditingAppointment({
        ...editingAppointment,
        start: new Date(e.target.value).getTime(),
      });
    else if (field === "duration")
      setEditingAppointment({
        ...editingAppointment,
        duration: Number(e.target.value),
      });
    else
      setEditingAppointment({
        ...editingAppointment,
        [field]: e.target.value,
      });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editAppointmentsStart({
        new_appointment: editingAppointment,
        current_appointment,
      })
    );
  };
  useEffect(() => {
    setEditingAppointment(current_appointment);
  }, []);
  return (
    <>
      <h2>EDIT APPOINTMENT</h2>
      <div>
        <div>{editingAppointment?.ref_code}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="short_desc">Short Description</label>
          <input
            type="text"
            name="short_desc"
            id="short_desc"
            value={editingAppointment?.short_desc}
            onChange={(e) => handleChange(e, "short_desc")}
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            value={dateFormater(new Date(editingAppointment?.start))}
            onChange={(e) => handleChange(e, "start")}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={Number(editingAppointment?.duration)}
            onChange={(e) => handleChange(e, "duration")}
          />
          <span>Hours</span>
        </div>
        <div>
          <div>
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              name="topic"
              id="topic"
              value={editingAppointment?.topic}
              onChange={(e) => handleChange(e, "topic")}
            />
          </div>
          <div>
            <label htmlFor="description">Notes</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={editingAppointment?.description}
              onChange={(e) => handleChange(e, "description")}
            ></textarea>
          </div>
        </div>
        <div>
          <div>
            <button>Invoke</button>
          </div>
          <div>
            <button type="submit">SAVE</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditAppointment;

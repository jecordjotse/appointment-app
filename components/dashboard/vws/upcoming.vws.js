import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingAppointmentsStart } from "../../../lib/redux/upcoming/upcoming.actions";

const Upcoming = () => {
  const dispatch = useDispatch();
  const [appointments, setAppointments] = useState([]);
  const { upcomingAppointments } = useSelector((state) => state.upcoming);
  useEffect(() => {
    dispatch(fetchUpcomingAppointmentsStart(null));
    setAppointments(upcomingAppointments);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Upcoming Appointments</h2>
      <div>
        <h3>APPROVED</h3>
        <div>
          <ul>
            {appointments.map((appointment) => {
              if (appointment.approval === 1)
                return (
                  <li>
                    <div>
                      <p>{appointment.start}</p>
                      <p>{`${appointment.short_desc} with ${appointment.name}`}</p>
                    </div>
                    <div>
                      <small>{appointment.ref_code}</small>
                    </div>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h3>PENDING</h3>
        <div>
          <ul>
            {appointments.map((appointment) => {
              if (appointment.approval === 0)
                return (
                  <li>
                    <div>
                      <p>{appointment.start}</p>
                      <p>{`${appointment.short_desc} with ${appointment.name}`}</p>
                    </div>
                    <div>
                      <small>{appointment.ref_code}</small>
                    </div>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h3>DENIED</h3>
        <div>
          <ul>
            {appointments.map((appointment) => {
              if (appointment.approval === -1)
                return (
                  <li>
                    <div>
                      <p>{appointment.start}</p>
                      <p>{`${appointment.short_desc} with ${appointment.name}`}</p>
                    </div>
                    <div>
                      <small>{appointment.ref_code}</small>
                    </div>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upcoming;

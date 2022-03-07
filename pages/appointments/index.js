import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
const fetcher = (ref_code) =>
  fetch(`http://localhost:3000/appointments?ref_code=${ref_code}`).then((res) =>
    res.json()
  );
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [ref_code, setRef_code] = useState("");

  const { data, error } = useSWR(ref_code, fetcher, {
    refreshInterval: 3000,
  });

  const handleChange = (event) => {
    setRef_code(event.target.value);
  };

  useEffect(() => {
    setAppointments(data);
  }, [data]);

  return (
    <>
      <h1>Appointments</h1>

      <div>
        <h2>Find Appointment</h2>
        <div>
          <p>
            Please enter you 10 digit reference shown on the thank you page. It
            was also sent to you email{" "}
          </p>
          <label htmlFor="reference_code"></label>
          <input
            type="text"
            name="reference_code"
            id="reference_code"
            placeholder="e.g. 65fe030484"
            onKeyUpCapture={handleChange}
          />
        </div>
        <div>
          <ul>
            {appointments?.map((appointment) => (
              <li key={`${appointment.ref_code}`}>
                <Link href={`/appointments/${appointment._id}`} passHref>
                  <div>
                    <div>{appointment.ref_code}</div>
                    <div>{appointment.short_desc}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Appointments;

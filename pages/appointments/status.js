import React, { useState } from "react";
const fetcher = (id) =>
  fetch(`http://localhost:3000/appointments?ref_code=${ref_code}`).then((res) =>
    res.json()
  );

const Status = () => {
  const [appointments, setAppointments] = useState([]);
  const [ref_code, setRef_code] = useState("");

  const { data: appointmentDetails, error } = useSWR(ref_code, fetcher, {
    refreshInterval: 3600000,
  });

  return (
    <>
      <input type="text" name="refer" />
    </>
  );
};

export default Status;

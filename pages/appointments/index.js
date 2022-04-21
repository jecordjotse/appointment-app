import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import AppointmnetsPage from "../../components/appointmnetsPage";
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
      <AppointmnetsPage />
    </>
  );
};

export default Appointments;

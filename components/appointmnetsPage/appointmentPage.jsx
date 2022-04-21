import React, { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (ref_code) =>
  fetch(`http://localhost:3000/appointments?ref_code=${ref_code}`).then((res) =>
    res.json()
  );import { AppointmentsPageWrap, StatusCard } from './appointmentPageStyles'
import FindCard from "./findCard";

const AppointmentPage = () => {
    //* Find Card
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
    //* end Find Car
  return (
    <AppointmentsPageWrap>
        <FindCard appointments={appointments} handleChange={handleChange}/>
    <StatusCard>
     Hello   
    </StatusCard>
    </AppointmentsPageWrap>
  )
}

export default AppointmentPage
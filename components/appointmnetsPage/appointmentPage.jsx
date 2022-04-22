import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { AppointmentsPageWrap } from './appointmentPageStyles'
import FindCard from "./findCard";
import StatusCard from "./statusCard";
const allFetcher = (ref_code) =>
  fetch(`http://localhost:3000/appointments?ref_code=${ref_code}`).then((res) =>
    res.json()
  );

const appointmentFetcher = (id) =>
fetch(`http://localhost:3000/appointments/${id}`).then((res) => res.json());


const AppointmentPage = () => {
    //* Find Card
    const [appointments, setAppointments] = useState([]);
    const [ref_code, setRef_code] = useState("");
  
    const { data, error:  allFetcherError } = useSWR(ref_code, allFetcher, {
      refreshInterval: 3000,
    });
  
    const handleChange = (event) => {
        console.log(event.target.value)
      setRef_code(event.target.value);
    };
  
    useEffect(() => {
      setAppointments(data);
    }, [data]);
    //* end Find Car

    //* Status Card
    const router = useRouter();
    const id = router.query.appointment? router.query.appointment:0;    
    const [appointment, setAppointment] = useState({
      start: "",
      duration: 0,
      name: "",
      number: "",
      cty_code: "",
      email: "",
      short_desc: "",
      topic: "",
      description: "",
      verify: 0,
      ref_code: "",
      request: 0,
      approval: 0,
    });
    const [appointmentDate, setAppointmentDate] = useState(null);
  
    const { data: appointmentDetails, error: appointmentFetcherError } = useSWR(id, appointmentFetcher, {
      refreshInterval: 3600000,
    });
  
    useEffect(() => {
      setAppointment(appointmentDetails);
    }, [appointmentDetails]);
  
    useEffect(() => {
      if (!!appointment) setAppointmentDate(new Date(appointment.start));
    }, [appointment]);    
    //* end Status Card
  return (
    <AppointmentsPageWrap>
        <FindCard appointments={appointments} handleChange={handleChange}/>
        <StatusCard appointment={appointment} appointmentDate={appointmentDate}/>
    </AppointmentsPageWrap>
  )
}

export default AppointmentPage
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (id) =>
  fetch(`http://localhost:3000/appointments/${id}`).then((res) => res.json());

const AppointmentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
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

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { data: appointmentDetails, error } = useSWR(id, fetcher, {
    refreshInterval: 3600000,
  });

  useEffect(() => {
    setAppointment(appointmentDetails);
  }, [appointmentDetails]);

  useEffect(() => {
    if (!!appointment) setAppointmentDate(new Date(appointment.start));
  }, [appointment]);

  return (
    <>
      <h1>Appointment Details</h1>
      <h2>Your Details</h2>
      <p>Hi {appointment?.name}</p>
      <p>
        Your email is {appointment?.email} and phone number is{" "}
        {`${appointment?.cty_code} ${appointment?.number.slice(1)}`}
      </p>
      <h2>Status</h2>
      <p>
        You appointment on{" "}
        {`${
          appointmentDate ? weekday[appointmentDate.getDay()] : ""
        } the ${appointmentDate?.getDate()} at ${appointmentDate?.toLocaleString(
          "en-US",
          { hour: "numeric", minute: "numeric", hour12: true }
        )}`}{" "}
        is{" "}
        <small>
          {appointment
            ? appointment.approval === 0
              ? "PENDING"
              : appointment.approval === 1
              ? "APPROVED"
              : "DENIED"
            : ""}
        </small>
      </p>
    </>
  );
};

export default AppointmentDetails;

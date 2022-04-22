import React, { useEffect } from 'react'
import BlankDataSvg from '../../svg/blankDataSvg';
import DetailsPageSvg from '../../svg/detailsPageSvg';
import { StatusCardWrap } from './statusCardStyles'

const StatusCard = ({appointment, appointmentDate, id}) => {

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(()=>{
    console.log(appointment?.id);
  },[id])

  return (
    <StatusCardWrap> 
      <h1>Appointment Details</h1>
      <div style={{display:"flex"}}>
        <div style={{flex:"1 1 auto"}}> 
          {!(!appointment && !appointment?.id) && (<>
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
            <h2>About</h2>
            <p>{appointment?.short_desc}</p> 
          </>)}
          {(!appointment && !appointment?.id) && (<BlankDataSvg />)}
        </div>
        <DetailsPageSvg />
      </div>
     </StatusCardWrap>
  )
}

export default StatusCard
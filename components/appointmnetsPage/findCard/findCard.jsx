import React from 'react'
import Link from "next/link";
import { FindCardWrap, TitleWrap } from './findCardStyles'
import Input from '../../input';

const FindCard = ({appointments, handleChange}) => {
  return (
      <FindCardWrap>
  <TitleWrap>Find Appointment</TitleWrap>
    <p>
      Please enter you 10 digit reference shown on the thank you page. It
      was also sent to you email{" "}
    </p>
    <label htmlFor="reference_code"></label>
    <Input
      type="text"
      name="reference_code"
      id="reference_code"
      placeholder="e.g. 65fe030484"
      onKeyUpCapture={handleChange}
        style={{component:"wrap",style:{}}}
    />
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
      </FindCardWrap>
  )
}

export default FindCard
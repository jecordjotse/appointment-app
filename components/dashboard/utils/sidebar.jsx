import React from 'react'
import Link from "next/link";

const Sidebar = () => {
  return (
      <ul>
      <li>
          <Link href="/dashboard"><a>Dashboard</a></Link>
      </li>
        <li>
            <Link href="/dashboard/approve-appointment"><a>Approve Appointment</a></Link>
        </li>
          <li>
              <Link href="/dashboard/list-appointment"><a>List Appointments</a></Link>
          </li>
          <li>
              <Link href="/dashboard/have-appointment"><a>Have an Appointment</a></Link>
          </li>
          <li>
              <Link href="/dashboard/upcoming-appointment"><a>Upcoming Appointment</a></Link>
          </li>
      </ul>
  )
}

export default Sidebar
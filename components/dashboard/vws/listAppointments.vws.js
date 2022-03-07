import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResultsStart } from "../../../lib/redux/search/search.actions";
import dateFormater from "../../../utils/dateFormater";
import { setEditingAppointment } from "../../../lib/redux/edit-appointment/edit-appointment.actions";
import { useRouter } from "next/router";

const ListAppointments = () => {
  const router = useRouter();
  const { searchResults, filters } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchResultsStart({ filters }));
  }, []);
  useSelector;
  const handleApprovalChange = (event) => {
    dispatch(
      fetchSearchResultsStart({
        filters: {
          ...filters,
          approval_status: approvalValueSelector(event.target.value),
        },
      })
    );
  };
  const handleStartDateChange = (event) => {
    console.log(event.target.value);
    dispatch(
      fetchSearchResultsStart({
        filters: {
          ...filters,
          start_date: new Date(event.target.value).getTime(),
        },
      })
    );
  };
  const handleDurationChange = (event) => {
    dispatch(
      fetchSearchResultsStart({
        filters: {
          ...filters,
          duration: event.target.value,
        },
      })
    );
  };
  const approvalValueSelector = (str) => {
    switch (str) {
      case "all":
        console.log(str);
        return null;
      case "denied":
        return "-1";
      case "approved":
        return "1";
      case "pending":
      default:
        return "0";
    }
  };
  const handleSetting = (e, appointment) => {
    e.preventDefault();
    console.log(JSON.stringify(appointment, undefined, 2));
    dispatch(setEditingAppointment(appointment));
    router.push("/dashboard/edit");
  };

  useEffect(() => {
    console.log(filters.approval_status === "1");
  }, [filters]);
  return (
    <>
      <h2>List of Appointments</h2>
      <div>
        FILTERS:{" "}
        <div>
          <div>
            <label htmlFor="approval">APPROVAL</label>
            <select
              name="approval"
              id="approval"
              onChange={handleApprovalChange}
            >
              <option value="all" selected={filters.approval_status === null}>
                All
              </option>
              <option
                value="approved"
                selected={filters.approval_status === "1"}
              >
                APPROVED
              </option>
              <option
                value="pending"
                selected={filters.approval_status === "0"}
              >
                PENDING
              </option>
              <option
                value="denied"
                selected={filters.approval_status === "-1"}
              >
                DENIED
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="start_date">START</label>
            <input
              type="date"
              name="start_date"
              id="start_date"
              onChange={handleStartDateChange}
              value={dateFormater(new Date(filters.start_date))}
            />
          </div>
          <div>
            <label htmlFor="duation">Duration</label>
            <input
              type="number"
              name="duation"
              id="duation"
              onChange={handleDurationChange}
              value={filters.duration}
            />
          </div>
        </div>
      </div>
      <div>
        <ul>
          {searchResults?.map((item) => (
            <li>
              <div>
                {item.ref_code} - {item.short_desc} - {item.name} -{" "}
                <Link href="/">
                  <a onClick={(e) => handleSetting(e, item)}>
                    <small>SETTINGS</small>
                  </a>
                </Link>{" "}
                <small>INVOKE</small> <small>REMOVED</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListAppointments;

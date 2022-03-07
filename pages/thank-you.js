import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const fetcher = (id) =>
  fetch(`http://localhost:3000/appointments/${id}`).then((res) => res.json());

const ThankYou = () => {
  const router = useRouter();
  const { item_id, ref_code } = router.query;
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

  const assignRefCode = async (ref_code) => {
    const res = await fetch(
      `http://localhost:3000/appointments/${appointment._id}`,
      {
        body: JSON.stringify({
          start: appointment.start,
          duration: appointment.duration,
          name: appointment.name,
          number: appointment.number,
          cty_code: appointment.cty_code,
          email: appointment.email,
          short_desc: appointment.short_desc,
          topic: "",
          description: "",
          verify: appointment.verify,
          ref_code: ref_code,
          request: appointment.request,
          approval: 0,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }
    );
  };

  const { data: appointmentDetails, error } = useSWR(item_id, fetcher, {
    refreshInterval: 3600000,
  });

  useEffect(() => {
    setAppointment(appointmentDetails);
  }, [appointmentDetails]);

  useEffect(async () => {
    if (!!appointment)
      if (
        !appointment.ref_code ||
        (!!appointment.ref_code && appointment.ref_code === "")
      ) {
        console.log("Add Ref");
        await assignRefCode(ref_code);
      }
  }, [appointment]);

  return (
    <>
      <h1>Thank You!</h1>
      <p>
        Thank you signing up. We respect your donec gravida dui ac accumsan
        tempor. Phasellus vulputate cursus tempus.{" "}
      </p>
      <p>
        Your Reference code <small>{appointment?.ref_code}</small>
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur nec porttitor ante
      </p>
    </>
  );
};

export default ThankYou;

import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import useSWR from "swr";
import Footer from "../components/footer";
import Input from "../components/input";

const InputsPlaygroundPage = () => {
  const { id } = useRouter().query;

  const { data, error, isValidating } = useSWR(id, (id) =>
    fetch(
      "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com/appointments/undefined"
    )
      .then((res) => {
        data: res.text();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
  );

  useEffect(() => {
    console.log(`Data: ${data} Error: ${error} IsLoading: ${isValidating}`);
  }, [data, error, isValidating]);
  return (
    <>
      <div
        style={{
          "margin-top": "90px",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "white",
            width: "600px",
            padding: "10px 50px 0 20px",
          }}
        >
          <Input
            type="text"
            placeholder={"Hello"}
            label="Text Input Main input"
            style={{ component: "input", style: {} }}
          />
          <Input
            type="select"
            label="Text Input"
            options={[]}
            style={{ component: "input", style: {} }}
          />
          <Input
            type="text-area"
            placeholder={"Hello"}
            label="Text Input"
            style={{ component: "input", style: {} }}
          />
          <Input
            type="radio"
            placeholder={"Hello"}
            label="Text Input"
            style={{ component: "input", style: {} }}
          />
          <div style={{ width: "144px" }}>
            <Input
              placeholder={"Footer Inpus"}
              label=""
              location={"footer"}
              style={{ component: "input", style: {} }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputsPlaygroundPage;

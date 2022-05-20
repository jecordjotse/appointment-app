import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import ThankYouPage from "../components/thankYou/thankYouPage";
const _url =
    "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";

const fetcher = (id) =>
	fetch(`${_url}/appointments/${id}`).then((res) => res.json());

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
		ref_code: ref_code,
		request: 0,
		approval: 0,
	});

	const assignRefCode = async (ref_code) => {
		fetch(`${_url}/appointments/${item_id}`, {
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
		});
	};

	const { data: appointmentDetails, error } = useSWR(item_id, fetcher, {
		refreshInterval: 3600000,
	});

	useEffect(() => {
		setAppointment(appointmentDetails);
	}, [appointmentDetails]);

	useEffect(() => {
		if (appointment) {
			if (
				!appointment.ref_code ||
                (!!appointment.ref_code && appointment.ref_code === "")
			) {
				console.log("Add Ref");
				assignRefCode(ref_code);
			}
		}
		// eslint-disable-next-line
    }, []);

	useEffect(() => {
		console.log(item_id);
		console.log(ref_code);
	}, [item_id, ref_code]);
	return (
		<>
			{error && <></>}
			<ThankYouPage ref_code={ref_code} />
			<Footer />
		</>
	);
};

export default ThankYou;

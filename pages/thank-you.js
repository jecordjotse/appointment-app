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
		revalidateOnFocus: false,
		onSuccess: (data, key, config) => {
			setAppointment(data);
			console.log(data); //this always prints "undefined"
			this.data = data;
			this.error = error;
		},
	});

	useEffect(() => {
		if (!!appointment._id)
			if (
				!appointment.ref_code ||
				(!!appointment.ref_code && appointment.ref_code === "")
			)
				assignRefCode(ref_code);
	}, [appointment]);
	return (
		<>
			{error && <></>}
			<ThankYouPage
				id={appointment._id ? appointment._id : ref_code}
				ref_code={
					appointment.ref_code ? appointment.ref_code : ref_code
				}
			/>
			<Footer />
		</>
	);
};

export default ThankYou;

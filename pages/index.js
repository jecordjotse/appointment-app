import Head from "next/head";
import HomePageComponent from "../components/homePage";
import Footer from "../components/footer";
const Home = () => {
	return (
		<>
			<Head>
				<title>Appointment App - Homepage</title>
				<meta
					name="description"
					content="This is an appointment app. Boking concultant meetings"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePageComponent />
			<Footer />
		</>
	);
};

export default Home;

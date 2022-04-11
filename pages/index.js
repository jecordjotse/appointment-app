import Head from "next/head";
import BookAppointment1Component from "../components/bookAppointment/bookAppointment1";
import HomePageBanner from "../components/homePage/homePageBanner/homePageBanner";
import HomeHowItWorksComponent from "../components/homePage/homeHowItWorks/homeHowItWorks";
import { Grid } from "../styles/appGlobal";
import HomePageComponent from "../components/homePage";
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
    </>
  );
};

export default Home;

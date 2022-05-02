import BookAppointmentPage from "../../components/bookAppointment";
import { useRouter } from "next/router";
import Footer from "../../components/footer";

const BookAppointment = () => {
  const router = useRouter();
  const { params } = router.query;
  return (
    <>
      <BookAppointmentPage page={"" + Number(params ? params[0] : 0)} />
      <Footer />
    </>
  );
};

export default BookAppointment;

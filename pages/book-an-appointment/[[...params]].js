import BookAppointmentPage from "../../components/bookAppointment";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer";

const BookAppointment = () => {
  const router = useRouter();
  const { params } = router.query;
  useEffect(() => {
    console.log(Number(params ?? [0]));
  }, [params]);
  return (
    <>
      <BookAppointmentPage page={"" + Number(params ?? [0])} />
      <Footer />
    </>
  );
};

export default BookAppointment;

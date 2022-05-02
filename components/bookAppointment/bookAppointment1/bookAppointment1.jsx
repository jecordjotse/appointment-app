import React from 'react'
import {useRouter} from "next/router"
import { BookAppointment1Wrap, FormItemWrap, LabelWrap, SendButton, TitleWrap } from './bookAppointment1Styles';
import Input from '../../input';

const _url = "http://appointmentapi-env.eba-p2gbkhf2.us-east-1.elasticbeanstalk.com";
const BookAppointment1Component = () => {

    const router = useRouter();
	const route = router.pathname;
    
    const verifyClient = async event => {
        await bookAppointment_1(event);
    }

    const bookAppointment_1 = async event => {
        event.preventDefault()
    
        const res = await fetch(
          `${_url}/appointments`,
          {
            body: JSON.stringify({
                name: event.target.name.value,
                number: event.target.number.value,
                cty_code: event.target.cty_code.value,
                email: event.target.email.value,
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'

        console.log('The results: ', result)


        if(result){
            //For verification
            //router.push("/verify")

            router.push(`/book-an-appointment/2/${result._id}`)
        }
      }
    
    
  return (
      <BookAppointment1Wrap style={{background: "#ffffff"}}>
        <TitleWrap>Book Appointment</TitleWrap>
        <form onSubmit={verifyClient}>
            <FormItemWrap>
                <LabelWrap htmlFor="name">Name</LabelWrap>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g. Jane Doe"
                    style={{ component: "input", style: {} }}
                />
            </FormItemWrap>
            <FormItemWrap>
            <LabelWrap htmlFor="name">Phone Number</LabelWrap>
            <div style={{display:"flex"}}>
                <Input type="select" placeholder={"country"} options={[{"+233":"Gh +233"},{"+234":"Ng +234"},{"+1":"Us +1"}]}  id="cty_code" name="cty_code" style={{component:"wrap",style:{width:"35%",marginRight:"15px"}}}/>
                <Input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="e.g. 05980839230"
                    style={{ component: "input", style: {} }}
                />
            </div>
            </FormItemWrap>
            <FormItemWrap>
            <LabelWrap htmlFor="name">Email</LabelWrap>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. janedoe@mail.com"
                style={{ component: "input", style: {} }}
            />
            </FormItemWrap>
            <FormItemWrap>
                <SendButton variant="contained" type="submit">{route !== "/"? "Verify":"Book"}</SendButton>
            </FormItemWrap>
        </form>
    </BookAppointment1Wrap>
  )
}

export default BookAppointment1Component
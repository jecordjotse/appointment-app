import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import {useRouter} from "next/router"
import { BookAppointment2Wrap, FormItemWrap, LabelWrap, SendButton, TitleWrap  } from './bookAppointment2Styles';
import Input from '../../input';
const fetcher = id => fetch(`http://localhost:3000/appointments/${id}`).then(res => res.json());

const BookAppointment2Component = () => {

    const router = useRouter();
	const route = router.pathname;
    const { id } = router.query;
    const [appointment, setAppointment] = useState({
        name: "",
        number:"",
        cty_code: "",
        email:"",
    })

    const handleBook = async event => {
        await bookAppointment_1(event)
    }
	const { data: appointmentDetails, error } = useSWR(id, fetcher, {
		refreshInterval: 3600000,
	});

    const bookAppointment_1 = async event => {
        event.preventDefault()
        console.log(event.target.short_desc.value)
        const res = await fetch(
          `http://localhost:3000/appointments/${appointment._id}`,
          {
            body: JSON.stringify({
                start: new Date(event.target.start_date.value).getTime(),
                duration: Number(event.target.duration.value),
                name: appointment.name,
                number:appointment.number,
                cty_code: appointment.cty_code,
                email: appointment.email,
                short_desc: event.target.short_desc.value,
                topic: "",
                description: "",
                verify: appointment.verify,
                ref_code: "",
                request: 1,
                approval: 0,
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          }
        )
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'


        console.log('The results: ', result)

        if(result){
            //For verification
            //router.push("/verify")
            const res_ = await fetch(
                `/api/ref-generator`,
                {
                  method: 'GET'
                }
              )

            const result_ = await res_.json()

            console.log('The results: ', result_)
            router.push(`/thank-you?item_id=${result._id}&ref_code=${result_.ref}`)
        }
      }

      useEffect(()=>{
        setAppointment(appointmentDetails)
      },[appointmentDetails])
      
// if(error || (!!appointment && appointment.request===1))
//     if(error)
//         return ( <RedirectComponent url='http://localhost:3001/book-an-appointment/1'/> )
//     else
//         return ( <RedirectComponent url='http://localhost:3001/appointments'/> )
// else
    return (
        <BookAppointment2Wrap style={{background: "#ffffff"}} >
            <TitleWrap>Book Appointment</TitleWrap>
            <form onSubmit={handleBook}>
            <FormItemWrap>
            <LabelWrap htmlFor="name">Description</LabelWrap>
            <Input
                name="short_desc"
                id="short_desc"
                cols="30"
                rows="10"
                type="textarea"
                placeholder="What is it about"
                style={{ component: "input", style: {} }}
            ></Input>
            </FormItemWrap>
            <FormItemWrap>
            <LabelWrap htmlFor="name">When</LabelWrap>
            <Input type="date" name="start_date" id="start_date"  style={{ component: "input", style: {} }}/>
            </FormItemWrap>
            <FormItemWrap>
            <LabelWrap htmlFor="name">How long</LabelWrap>
            <div style={{display:"flex"}}>
                <Input type="number" name="duration" id="duration"  style={{ component: "wrap", style: {width:"60% !important", marginRight:"40px"}}}/>
                <LabelWrap htmlFor="duration" style={{paddingTop:" 30px", fontSize: "30px"}}>Hours</LabelWrap>
            </div>
            </FormItemWrap>
            <FormItemWrap>
                <div>
                    <SendButton variant="contained"  type="submit">Book</SendButton>
                </div>
            </FormItemWrap>
            </form>
        </BookAppointment2Wrap>
    )
}

export default BookAppointment2Component
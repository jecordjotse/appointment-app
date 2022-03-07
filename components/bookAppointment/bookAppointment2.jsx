import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import {useRouter} from "next/router"
import RedirectComponent from '../utils/redirectComponent';
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
        <>
            <h2>Book Appointment</h2>
            <form onSubmit={handleBook}>
            <div>
            <label htmlFor="name">Description</label>
            <textarea
                name="short_desc"
                id="short_desc"
                cols="30"
                rows="10"
                placeholder="What is it about"
            ></textarea>
            </div>
            <div>
            <label htmlFor="name">When</label>
            <input type="date" name="start_date" id="start_date" />
            </div>
            <div>
            <label htmlFor="name">How long</label>
            <input type="number" name="duration" id="duration" />
            <label htmlFor="duration">Hours</label>
            </div>
            <div>
                <div>
                    <button type="submit">Book</button>
                </div>
            </div>
            </form>
        </>
    )
}

export default BookAppointment2Component
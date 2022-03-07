import React from 'react'
import {useRouter} from "next/router"

const BookAppointment1Component = () => {

    const router = useRouter();
	const route = router.pathname;
    
    const verifyClient = async event => {
        await bookAppointment_1(event);
    }

    const bookAppointment_1 = async event => {
        event.preventDefault()
    
        const res = await fetch(
          'http://localhost:3000/appointments',
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
      <>
      <div>
        <h2>Book Appointment</h2>
        <form onSubmit={verifyClient}>
            <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="e.g. Jane Doe"
            />
            </div>
            <div>
            <label htmlFor="name">Number</label>
            <select name="cty_code" id="cty_code">
                <option value="+233">Ghana +233</option>
                <option value="+234">Nigeria +234</option>
                <option value="+1">USA +1</option>
            </select>
            <input
                type="tel"
                name="number"
                id="number"
                placeholder="e.g. 05980839230"
            />
            </div>
            <div>
            <label htmlFor="name">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. janedoe@mail.com"
            />
            </div>
            <div>
                <button type="submit">{route !== "/"? "Verify":"Book"}</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default BookAppointment1Component
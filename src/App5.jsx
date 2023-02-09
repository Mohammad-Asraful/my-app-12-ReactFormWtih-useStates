// login form with firstName and lastName and email

import React, { useState } from 'react'

const App4 = () => {

   const [fullName, setFullName] = useState({
      fName: '',
      lName: '',
      email: '',
      phone: '',
   }
   )

   const bioData = {
      id: 1,
      ...fullName,
      age: 26,
      gender: 'male',
   }
   console.log(bioData)

   const inputEvent = (event) => {

      const { value, name } = event.target

      setFullName((preValue) => {

         return {
            ...preValue,
            [name]: value,
         }

         /* if (name === 'fName') {
            return {
               fName: value,
               lName: preValue.lName,
               email: preValue.email,
               phone: preValue.phone
            }
         } else if (name === "lName") {
            return {
               fName: preValue.fName,
               lName: value,
               email: preValue.email,
               phone: preValue.phone
            }
         } else if (name === "email") {
            return {
               fName: preValue.fName,
               lName: preValue.lName,
               email: value,
               phone: preValue.phone
            }
         } else if (name === "phone") {
            return {
               fName: preValue.fName,
               lName: preValue.lName,
               email: preValue.email,
               phone: value
            }
         } */
      })
   }

   const onSubmits = (event) => {
      event.preventDefault();
      alert('form submitted')
   }

   return (
      <>
         <div className='main_div'>
            <form onSubmit={onSubmits}>
               <div>
                  <h1>
                     Hello {fullName.fName} {fullName.lName}
                  </h1>

                  <p>{fullName.email}</p>
                  <p>{fullName.phone}</p>

                  <input
                     type='text'
                     placeholder='Enter your name'
                     name='fName'
                     onChange={inputEvent}
                     value={fullName.fName}
                     autoComplete="off"
                  />
                  <br />
                  <input
                     type='text'
                     placeholder='Enter your Last name'
                     name='lName'
                     onChange={inputEvent}
                     value={fullName.lName}
                  />
                  <br />
                  <input
                     type='email'
                     placeholder='Enter your email'
                     name='email'
                     onChange={inputEvent}
                     value={fullName.email}
                  />
                  <br />
                  <input
                     type='number'
                     placeholder='Enter your number'
                     name='phone'
                     onChange={inputEvent}
                     value={fullName.phone}
                  />
                  <br />

                  <button type='submit'>Submit</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default App4
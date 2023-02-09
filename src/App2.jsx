import React, { useState } from 'react';

const App = () => {

   const textStyle = {
      fontSize: '18px',
      color: 'black',
      width: '400px',
      textAlign: 'center',
      // height: '200px',
      overflow: 'scroll',
      overflowX: 'hidden',
   }

   // const innerText = 'Asraful'
   const [name, setName] = useState('')
   const [lastName, setLastName] = useState('')
   const [fullName, setFullName] = useState('')
   const [newLastName, setNewLastName] = useState('')

   const inputEvent = (event) => {
      setName(event.target.value)
   }

   const onSubmit = (event) => {
      event.preventDefault();
      setFullName(name)
      setNewLastName(lastName)
   }

   const inputEventTwo = (event) => {
      setLastName(event.target.value)
   }

   return (
      <>
         <div className='main_div'>
            <form onSubmit={onSubmit}>
               <div>
                  <h1 style={textStyle}>Hello {fullName} {newLastName}</h1>
                  <input
                     type='text'
                     placeholder='Enter your name'
                     onChange={inputEvent}
                     value={name} />
                  <br />
                  <input
                     type='text'
                     placeholder='Enter your Last name'
                     onChange={inputEventTwo}
                     value={lastName} />
                  <button type='submit' onClick={onSubmit}>Submit</button>
               </div>
            </form>
         </div>
      </>
   );
}

export default App;
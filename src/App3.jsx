// login form with firstName and lastName

import React, { useState } from 'react'

const App3 = () => {

  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
  }
  )

  const inputEvent = (event) => {
    // setName(event.target.value)
    const value = event.target.value
    const name = event.target.name

    setFullName((preValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: preValue.lName,
        }
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        }
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submitted')

  }

  return (
    <>
      <div className='main_div'>
        <form onSubmit={onSubmit}>
          <div>
            <h1 >Hello {fullName.fName} {fullName.lName}</h1>
            <input
              type='text'
              placeholder='Enter your name'
              name='fName'
              onChange={inputEvent}
            // value={fullName.fName}
            />
            <br />
            <input
              type='text'
              placeholder='Enter your Last name'
              name='lName'
              onChange={inputEvent}
            // value={fullName.lName}
            />
            <br />

            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App3
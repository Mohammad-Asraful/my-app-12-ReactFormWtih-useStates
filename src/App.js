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
  const [name, setName] = useState("")
  const [fullName, setFullName] = useState()

  const inputEvent = (event) => {
    setName(event.target.value)
  }

  const onSubmit = (event) => {
    setFullName(name)
  }

  return (
    <>
      <div className='main_div'>
        <form>
          <div>
            <h1 style={textStyle}>Hello {fullName}</h1>
            <input
              type='text'
              placeholder='Enter your name'
              onChange={inputEvent}
              value={name} />
            <button onClick={onSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
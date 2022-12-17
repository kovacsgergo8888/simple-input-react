import React, { useState } from 'react'
import './App.css'
import SimpleInput from './SimpleInput'

function App() {
  const [startingValue, setStartingValue] = useState('starting value')
  const onSimpleInputChange = (value: string) => {
    setStartingValue(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>{startingValue}</div>
        <div>
          <SimpleInput value={startingValue} onChange={onSimpleInputChange}/>
        </div>
      </header>
    </div>
  )
}

export default App

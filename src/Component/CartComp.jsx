import React, { useContext } from 'react'
import CounterContext from './context/CounterContext'

export default function CartComp() {
    const {increment} =  useContext(CounterContext)
  return (
    <div>
        
        <button onClick={increment}>Add Cart</button>
    </div>
  )
}

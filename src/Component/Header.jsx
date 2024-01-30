import React,{ useContext } from 'react'
import CounterContext from './context/CounterContext'

export default function Header() {
    const {count} = useContext(CounterContext)

  return (
    <div>Header Cart Count---{count} </div>
  )
}

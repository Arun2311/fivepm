import React, { useState } from 'react'
let count = 0
export const Form = () => {
    const [fname,setfname] =  useState("")


    const handlefname  =(e)=>{
        setfname(e.target.value)
    }
  return (
    <div>

{count++}
<label>First name --------{fname}</label>
        <input onChange={handlefname} placeholder='enter u r name'/>
    </div>
  )
}

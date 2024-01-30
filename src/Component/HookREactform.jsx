import React from "react";
import { useForm } from "react-hook-form"

export default function HookREactform() {

    const {register ,handleSubmit ,formState:{errors}} = useForm()


    const onsubmit = (data)=>{
        console.log(data);
    }

    console.log(errors);

  return (
    <div>
      <div>
        <label> First Name</label>
        <input {...register("firstname" ,{required:"first name is required"})} type="text" />

      <p>{errors?.firstname?.message}</p>  

        <br></br>
        <label> Age</label>
        <input {...register("age" ,{required:"Age is required"})} type="Number" />

        <p>{errors?.age?.message}</p>

        <br></br>

        <label> Email</label>
        <input {...register("email" ,{required:"email is required"})} type="text" />
        <p className="red">{errors?.email?.message}</p>
        <br></br>

        <button onClick={handleSubmit(onsubmit)}>Submit</button>
      </div>
    </div>
  );
}

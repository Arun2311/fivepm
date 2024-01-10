import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name:yup.string().required("First name require"),
  age: yup.number().required("age is required").min(4),
  password:yup.string().required("First name require"),
  confirmpassword:yup.string().required(" require").oneOf([yup.ref("password"),null])


})

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver:yupResolver(schema)});



  const onsubmit = (data) => {
    console.log(data);
  };
  console.log(watch("name"));
  return (
    <div>
      First
      <input {...register("name")} />
      <p>{errors?.name?.message}</p>
      <br></br>
      <br></br>
      <input {...register("age")} />

      <input {...register("password")} />

      <input {...register("confirmpassword")} />

      <p>{errors?.age?.message}</p>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleSubmit(onsubmit)}>Add</button>
    </div>
  );
}

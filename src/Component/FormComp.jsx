import React, { useState } from "react";

export default function FormComp() {
  const [firstname, setfirstname] = useState("");
  const [age, setage] = useState("");

  const [email, setemail] = useState("");

  const [show, setshow] = useState(false);

  const handlefirstname = (e) => {
    setfirstname(e.target.value);
  };

  const handleage = (e) => {
    setage(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlehide = () => {
    setshow(true);
  };

  return (
    <div>
      <h1>Week end class</h1>
{!show &&
      <div>
        <label> First Name</label>
        <input type="text" onChange={handlefirstname} />

        <br></br>
        <label> Age</label>
        <input type="Number" onChange={handleage} />

        <br></br>

        <label> Email</label>
        <input type="text" onChange={handleemail} />

        <br></br>

        <button onClick={handlehide}>Submit</button>
      </div>
}
      {show && (
        <div>
          <h1>Name : {firstname}</h1>
          <h2>Age : {age}</h2>
          <h3>Email : {email}</h3>
        </div>
      )}
    </div>
  );
}

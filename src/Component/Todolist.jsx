import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default function Todolist() {
  let ukid = uuidv4();
  
  const [todoinput, settodoinput] = useState("");
  const [todoarray, settodoarray] = useState([]);

/* The line `const focusinp = useRef()` is creating a ref object using the `useRef` hook. This ref
object can be used to reference a DOM element in the React component. In this case, it is creating a
ref that can be used to reference an input element. */
  const focusinp =  useRef()

  useEffect(() => {

    focusinp.current.focus()
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios.get("http://localhost:3000/todoList");
    settodoarray(response.data);
  };

  const handleinput = (e) => {
    settodoinput(e.target.value);
  };

  const handleadd = async () => {
    const response = await axios.post("http://localhost:3000/todoList", {
      id: ukid,
      task: todoinput,
    });
    getdata();

    // settodoarray([...todoarray, { id: ukid, task: todoinput }]);
  };

  const handledelet = async (id) => {
    await axios.delete(`http://localhost:3000/todoList/${id}`);
    // const filterdara = todoarray.filter((da) => da.id != id);
    getdata();
    // settodoarray(filterdara);
  };

  const handleupdate = async (index) => {
    const updatetask = prompt("enter u updated text", todoarray[index].task);
    console.log(updatetask, "SDds");
    await axios.put(`http://localhost:3000/todoList/${todoarray[index].id}`, {
      id: todoarray[index].id,
      task: updatetask,
    });
    getdata();

    // const copied = [...todoarray];

    // copied[index].task = updatetask;

    // settodoarray(copied);
  };

  return (
    <div>
      <h1 className="ms-3">Todo list</h1>
      <input ref={focusinp} onChange={handleinput} className="ms-3" type="text" />

      <button onClick={handleadd} className="btn btn-primary ms-3">
        ADD
      </button>

      <div> Todo List</div>
      {todoarray?.map((da, i) => (
        <ul key={i}>
          <li>{da.task}</li>
          <button onClick={() => handleupdate(i)}>edit</button>
          <button onClick={() => handledelet(da.id)}>delete</button>
        </ul>
      ))}
    </div>
  );
}

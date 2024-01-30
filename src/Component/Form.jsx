import React, { PureComponent, useCallback, useEffect, useMemo, useState } from "react";
let count = 0;
 const Form = () => {
  const [fname, setfname] = useState("");

  const handlefname = (e) => {
    setfname(e.target.value);
  };

/* The `useCallback` hook is used to memoize a callback function and only recreate it when its
dependencies change. In this case, `useCallback(handlefname, [fname])` is memoizing the
`handlefname` function and ensuring that it is only recreated when the `fname` state variable
changes. */
  // useCallback(handlefname, [fname]);

  /* The `useMemo` hook is used to memoize a value and only recompute it when its dependencies change. In
this case, `useMemo(handlefname, [])` is memoizing the `handlefname` function and ensuring that it
is only recomputed when the dependencies (in this case, an empty array `[]`) change. Since the
dependencies are empty, the `handlefname` function will only be computed once during the initial
render and will not be recomputed again. */
  // useMemo(handlefname, []);

  return (
    <div>
      {count++}
      <label>First name --------{fname}</label>
      <input onChange={handlefname} placeholder="enter u r name" />
    </div>
  );
};



export default Form




/* The Form class is a PureComponent in JavaScript React. */
// export default class Form extends PureComponent {
//   render() {
//     return (
//       <div>Form</div>
//     )
//   }
// }
// /* `PureComponent` is a class component in React that is similar to `Component`, but it implements a
// `shouldComponentUpdate` method with a shallow comparison of props and state. This means that a
// `PureComponent` will only re-render if its props or state have changed. It helps to optimize
// performance by preventing unnecessary re-renders when the component's data hasn't changed. */
// PureComponent
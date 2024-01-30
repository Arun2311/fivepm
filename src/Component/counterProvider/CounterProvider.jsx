import { useState } from "react";
import CounterContext from "../context/CounterContext";

const CounterProvider = ({ children }) => {
  
  const [count, setcount] = useState(4);
  const increment = () => {
setcount(count+1)
  };
  return <CounterContext.Provider value={{count,increment}}>{children}</CounterContext.Provider>;
};

export default CounterProvider;

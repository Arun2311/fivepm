import React, { Component } from "react";
import Movie from "./Component/Movie";
// import { Form } from "./Component/Form";
import ReactHookForm from "./Component/ReactHookForm";
import Corcommon from "./Component/Corcommon";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import ArunBootstrap from "./Component/ArunBootstrap";
import FormComp from "./Component/FormComp";
import HookREactform from "./Component/HookREactform";
import "./App.css";
import Todolist from "./Component/Todolist";
import Header from "./Component/Header";
import CartComp from "./Component/CartComp";
import CounterProvider from "./Component/counterProvider/CounterProvider";

class App extends Component {
  render() {
    return (
      <>
        <CounterProvider>
          <Header />
          <CartComp />
        </CounterProvider>

        {/* <h1>Arun</h1>
        <h2>sudhakar</h2> */}
        {/* <ArunBootstrap/> */}

        {/* <FormComp/> */}

        {/* <Todolist/> */}

        {/* <HookREactform name={"arun"}/> */}
        {/*      <Corcommon name={prop.name}/> */}
        {/* <Movie name= {/> */}
        {/* <Form/> */}
        {/* <ReactHookForm/> */}
      </>
    );
  }
}

export default App;

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

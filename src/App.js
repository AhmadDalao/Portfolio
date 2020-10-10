import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/normalize.css";
import "./css/style.css";
import { main } from "./main";
import Main from "./containers/Main";

// import { main } from "./main";

class App extends React.Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <>
        <Main />
      </>
    );
  }
}
export default App;

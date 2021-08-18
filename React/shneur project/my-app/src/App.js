import React from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Routers } from "./components/Routers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callApi() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.next())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentMount() {
    this.callApi();
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Navbar />
        <h1>{this.state.apiResponse}</h1>
        <Routers />
      </div>
    );
  }
}

export default App;

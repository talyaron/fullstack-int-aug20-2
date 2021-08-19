import React from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Routers } from "./components/Routers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.next())
      .then((res) => this.setState({ apiResponse: res }));
    console.log(this.state.apiResponse);
  };

  componentMount = () => {
    this.callAPI();
    console.log(this.state.apiResponse);
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Navbar />
        <h1>{this.state.apiResponse}</h1>
        {console.log(this.state.apiResponse) }

        {/* <h1>this.state.apiRespons</h1> */}
        <Routers />
      </div>
    );
  }
}

export default App;

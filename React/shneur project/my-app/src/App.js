import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Routers } from "./components/Routers";
import Axios from "axios";
import { toast } from "react-toastify";


export default function App(e) {
  const [UserName, setUserName] = useState("");
  const [PhoneMumber, setPhoneMumber] = useState("");
  const [EmailAdress, setEmailAdress] = useState("");

  const hendelSubmit = () => {
    Axios.post("http://localhost:3001/api/insert", {
      UserName: UserName,
      PhoneMumber: PhoneMumber,
      EmailAdress: EmailAdress,
    }).then(() => {
      toast.success("api is working!");
    });
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />

      <form>
        <input
          type="text"
          name="UserName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          name="PhoneMumber"
          onChange={(e) => {
            setPhoneMumber(e.target.value);
          }}
        />
        <input
          type="text"
          name="EmailAdress"
          onChange={(e) => {
            setEmailAdress(e.target.value);
          }}
        />
        <button type="submit" onClick={hendelSubmit}>hendelSubmit</button>
      </form>
      <Routers />
    </div>
  );
}

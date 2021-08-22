import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Routers } from "./components/Routers";
import axios from "axios";
import { toast } from "react-toastify";


export default function App() {
  const [UserName, setUserName] = useState("");
  const [PhoneMumber, setPhoneMumber] = useState("");
  const [EmailAdress, setEmailAdress] = useState("");

  const hendelSubmit = (e) => {
    e.preventDefault()
    console.log("this is working")

    axios.post("/api/insert", {
      UserName: UserName,
      PhoneMumber: PhoneMumber,
      EmailAdress: EmailAdress,
    }).then(() => {
      toast.success("api is working!");
    }).catch(e=>{
      console.error(e)
    })
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

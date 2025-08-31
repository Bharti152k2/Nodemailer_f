import React, { useState } from "react";
import "./Mail.css";
import axios from "axios";

function Mail() {
  let [userData, setUserData] = useState("");

  let getUserData = ({ target: { value } }) => {
    setUserData(value);
  };
  //   console.log(userData);

  let getApi = () => {
    try {
      let data = axios.post(
        `https://nodemailer-b.onrender.com/sendmail`,
        userData,
        {
          mode: "cors",
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="div">
      <input
        type="email"
        placeholder="Enter your email"
        onChange={getUserData}
      />
      <button onClick={getApi}>Subscribe</button>
    </div>
  );
}

export default Mail;

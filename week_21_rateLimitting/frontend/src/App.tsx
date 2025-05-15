import { useState } from "react";
import "./App.css";
import axios from "axios";

import { Turnstile } from "@marsidev/react-turnstile";

function App() {
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [newPass, setNewPass] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="OTP"
        onChange={(e) => setOtp(e.target.value.toString())}
      />
      <input
        type="text"
        placeholder="New Password"
        onChange={(e) => setNewPass(e.target.value)}
      />
      <Turnstile
        onSuccess={(token) => setToken(token)}
        siteKey="0x4AAAAAABddoLBESAGRgkt7"></Turnstile>
      <button
        onClick={() => {
          axios.post("http://127.0.0.1:3000/reset-password", {
            email: "test3@gmail.com",
            otp: otp,
            token: token,
            newPassword: newPass,
          });
        }}>
        Update Password
      </button>
    </>
  );
}

export default App;

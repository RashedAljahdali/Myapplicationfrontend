import React, { useEffect } from "react";
import { formStyle, labelStyle, inputStyle, buttonStyle } from "./styles.js";
import { useNavigate } from "react-router-dom";

export interface Logininterface {
  Username: string | null;
  Password: string | null;
  Done: boolean | null;
}
export interface Logininterfaceprobs {
  State: Logininterface;
  Setfunc: React.Dispatch<React.SetStateAction<Logininterface>>;
}
const Login: React.FC<Logininterfaceprobs> = ({ State, Setfunc }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    Setfunc((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/senduserdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(State),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          Setfunc((prev) => ({ ...prev, Done: false }));
          throw new Error(`HTTP error! status: ${res.status}`);
        } else if (res.status === 200) {
          Setfunc((prev) => ({ ...prev, Done: true }));
        }
        return res.json(); // optional if you want the response body
      })
      .then((data) => {
        console.log("Server response:", data); // handle response if needed
      })
      .catch((err) => {
        Setfunc((prev) => ({ ...prev, Done: false }));

        console.error("Fetch error:", err);
      });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (State.Done === true) {
      navigate("/dashboard");
    }
  }, [State.Done, navigate]);

  return (
    <form className="formStyle" onSubmit={handle} style={formStyle}>
      <label className="labelStyle" style={labelStyle}>
        Username:{""}
        <input
          type="text"
          name="Username"
          value={State.Username || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <br />
      <label className="labelStyle" style={labelStyle}>
        Password:{""}
        <input
          type="text"
          name="Password"
          value={State.Password || ""}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <br />
      <button type="submit" className="buttonStyle" style={buttonStyle}>
        Submit
      </button>
      <br />
      {State.Done === false && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Invalid username or password
        </div>
      )}
    </form>
  );
};
export default Login;

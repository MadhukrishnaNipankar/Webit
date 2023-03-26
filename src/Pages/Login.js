import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 className="my-3">Signin to Continue..</h3>
      <div
        className="shadow p-3 mb-5 bg-body-tertiary rounded card border d-flex flex-column justify-content-center"
        style={{
          maxWidth: "20rem",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "white",
        }}
      >
        {/* Username */}
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Username:
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        {/* Password */}
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Password:
          </span>
          <input
            type="password"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        {/* Login Button */}
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => navigate("/home")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

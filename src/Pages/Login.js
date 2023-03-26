import React from "react";
import { useToast } from "@chakra-ui/react";
function Login() {
  const toast = useToast();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
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
          maxWidth: "25rem",
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
          onClick={() =>
            toast({
              title: "Logging in",
              description: "Just Wait for a moment",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

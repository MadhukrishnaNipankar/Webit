import React from "react";
import { Badge, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="container my-3"
      style={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="container my-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={() => navigate("/ask")}
        >
          Ask a question
        </button>

        <button
          type="button"
          class="btn btn-dark mx-3"
          onClick={() => navigate("/myprofile")}
        >
          My Profile
        </button>
      </div>

      <div className="my-3" style={{ alignSelf: "center" }}>
        <h4>Recently Asked Questions</h4>

        {/* Questions */}

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>

        <div
          className="my-3 card"
          style={{ maxWidth: "40rem", padding: "2rem" }}
        >
          <div className="question">
            <h5 style={{ fontWeight: "bold" }}>
              {" "}
              reCAPTCHA callback not working for Firebase Phone Auth
            </h5>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quaerat voluptates dicta placeat eveniet sed! Cumque vero tenetur
            unde at...
          </p>
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
            <span style={{ fontSize: "2vh" }}>asked 30 minutes ago</span>
          </Stack>

          <button
            type="button"
            class="btn btn-dark my-3"
            style={{ maxWidth: "7rem" }}
            onClick={() =>
              navigate(
                "/home/reCAPTCHA callback not working for Firebase Phone Auth"
              )
            }
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Code, Stack, Badge } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function MoreDetails() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    setSize("lg");
    onOpen();
  };

  return (
    <>
      <div className="container my-5 p-5">
        <div>
          <h2>reCAPTCHA callback not working for Firebase Phone Auth</h2>
          <div className="d-flex">
            <h6>Asked today </h6>
          </div>
          <hr />
          <p style={{ maxWidth: "50rem" }}>
            I am trying to implement phone auth in my NextJS website, and I have
            added the reCAPTCHA code in my useEffect , but it is not fired when
            the button with that id is clicked. There is no error as well. Here
            is the reCAPTCHA code:
          </p>
          <i>Code:</i>
          <code className="border" style={{ overflow: "auto" }}>
            <Stack direction="column">
              <Code
                children="'callback': (response) => {
                        console.log(response);
                      handlePersonalInfoUpdate();
                    },
"
              />
              <Code colorScheme="red" children="var chakra = 'awesome!'" />
              <Code
                colorScheme="yellow"
                children="'expired-callback': () => {
                        console.log('expired');
                    },
                    'error-callback': (error) => {
                        console.log(error);
                    }"
              />
            </Stack>
          </code>
          <br />
          <i className="my-3">There is no output. Any reason why?</i>
          <br />
          <br />
          <Stack direction="row">
            <Badge colorScheme="green">Python</Badge>
            <Badge colorScheme="red">Pandas</Badge>
          </Stack>
        </div>
        <hr />
        <div>
          <div style={{ fontSize: "1.3rem" }}>
            <i>Contribute a Solution</i>
          </div>

          <button
            onClick={() => handleClick()}
            type="button"
            class="btn btn-dark"
            key={size}
          >
            View Solutions
          </button>
        </div>

        {/* View Solutions Drawer */}
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader>
              <h4>3 Solutions</h4>
            </DrawerHeader>
            <hr />
            <DrawerBody>
              {/* Solution 1 */}
              <div className="my-2 card shadow p-3 mb-5 bg-body-tertiary rounded">
                <p>
                  What you are trying to do is link the entire group of objects
                  to one specific object. Instead you should put the Link
                  component inside of the Card.Group and use the id of the
                  desired product when you map over the objects in items. I'm
                  guessing that you want to link to that product that was
                  clicked, in that case wrap the element of that product card
                  with a
                </p>
                <br />
                <code className="border">
                  <Stack direction="row">
                    <Code
                      children="'callback': (response) => {
                        console.log(response);
                      handlePersonalInfoUpdate();
                    },
"
                    />
                    <Code
                      colorScheme="red"
                      children="var chakra = 'awesome!'"
                    />
                    <Code
                      colorScheme="yellow"
                      children="'expired-callback': () => {
                        console.log('expired');
                    },
                    'error-callback': (error) => {
                        console.log(error);
                    }"
                    />
                  </Stack>
                </code>
                <p>
                  this should be only in your routing component to specify that
                  it's an id that is part of the exact route
                </p>
              </div>
              <div className="my-2 card shadow p-3 mb-5 bg-body-tertiary rounded">
                <h5></h5>
                <p>
                  What you are trying to do is link the entire group of objects
                  to one specific object. Instead you should put the Link
                  component inside of the Card.Group and use the id of the
                  desired product when you map over the objects in items. I'm
                  guessing that you want to link to that product that was
                  clicked, in that case wrap the element of that product card
                  with a
                </p>
                <br />
                <code className="border">
                  <Stack direction="row">
                    <Code
                      children="'callback': (response) => {
                        console.log(response);
                      handlePersonalInfoUpdate();
                    },
"
                    />
                    <Code
                      colorScheme="red"
                      children="var chakra = 'awesome!'"
                    />
                    <Code
                      colorScheme="yellow"
                      children="'expired-callback': () => {
                        console.log('expired');
                    },
                    'error-callback': (error) => {
                        console.log(error);
                    }"
                    />
                  </Stack>
                </code>
                <p>
                  this should be only in your routing component to specify that
                  it's an id that is part of the exact route
                </p>
              </div>

              <div className="my-2 card shadow p-3 mb-5 bg-body-tertiary rounded">
                <h5></h5>
                <p>
                  What you are trying to do is link the entire group of objects
                  to one specific object. Instead you should put the Link
                  component inside of the Card.Group and use the id of the
                  desired product when you map over the objects in items. I'm
                  guessing that you want to link to that product that was
                  clicked, in that case wrap the element of that product card
                  with a
                </p>
                <br />
                <code className="border">
                  <Stack direction="row">
                    <Code
                      children="'callback': (response) => {
                        console.log(response);
                      handlePersonalInfoUpdate();
                    },
"
                    />
                    <Code
                      colorScheme="red"
                      children="var chakra = 'awesome!'"
                    />
                    <Code
                      colorScheme="yellow"
                      children="'expired-callback': () => {
                        console.log('expired');
                    },
                    'error-callback': (error) => {
                        console.log(error);
                    }"
                    />
                  </Stack>
                </code>
                <p>
                  this should be only in your routing component to specify that
                  it's an id that is part of the exact route
                </p>
              </div>

              <div className="my-2 card shadow p-3 mb-5 bg-body-tertiary rounded">
                <h5></h5>
                <p>
                  What you are trying to do is link the entire group of objects
                  to one specific object. Instead you should put the Link
                  component inside of the Card.Group and use the id of the
                  desired product when you map over the objects in items. I'm
                  guessing that you want to link to that product that was
                  clicked, in that case wrap the element of that product card
                  with a
                </p>
                <br />
                <code className="border">
                  <Stack direction="row">
                    <Code
                      children="'callback': (response) => {
                        console.log(response);
                      handlePersonalInfoUpdate();
                    },
"
                    />
                    <Code
                      colorScheme="red"
                      children="var chakra = 'awesome!'"
                    />
                    <Code
                      colorScheme="yellow"
                      children="'expired-callback': () => {
                        console.log('expired');
                    },
                    'error-callback': (error) => {
                        console.log(error);
                    }"
                    />
                  </Stack>
                </code>
                <p>
                  this should be only in your routing component to specify that
                  it's an id that is part of the exact route
                </p>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default MoreDetails;

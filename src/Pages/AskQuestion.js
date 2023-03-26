import React from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import {
  Heading,
  Stack,
  Box,
  StackDivider,
  Text,
  Input,
} from "@chakra-ui/react";
function AskQuestion() {
  return (
    <div className="container my-3">
      <Card>
        <CardHeader>
          <Heading size="md">Ask a public question</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Input placeholder="Title" size="lg" />
              <Text pt="2" fontSize="sm">
                Be specific and imagine you’re asking a question to another
                person.
              </Text>
            </Box>
            <Box>
              <div class="form-floating my-3">
                <textarea
                  class="form-control"
                  placeholder="Contribute Solution"
                  id="floatingTextarea2"
                  style={{ height: "20rem", maxWidth: "50rem" }}
                ></textarea>
                <label for="floatingTextarea2">Describe your Question</label>
              </div>
              <Text pt="2" fontSize="sm">
                Describe your problem in detail
              </Text>

              <button
                type="button"
                class="btn btn-dark my-3"
                style={{ maxWidth: "10rem" }}
              >
                Post Question
              </button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default AskQuestion;

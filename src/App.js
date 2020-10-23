import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ColorModeProvider,
  Flex,
  Input,
  List,
  Spinner,
  Stack,
  Text,
  ThemeProvider,
} from "@chakra-ui/core";
import JobListItem from "./components/JobListItem";
import api from "./api";
import "./global.css";

function App() {
  const [search, setSearch] = useState("");
  const [joblist, setJoblist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const originalList = useRef();
  useEffect(() => {
    setIsLoading(true);
    api.getJobs().then((data) => {
      setJoblist(data);
      originalList.current = data;
      setIsLoading(false);
    });
  }, []);
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Flex
          height="100%"
          bg="gray.300"
          direction="column"
          align="center"
          justify="flex-start"
          px={[4, 5, 6, 7, 8]}
          py={["50px", "60px", "70px", "80px", "100px"]}
          textAlign="center"
        >
          <Stack spacing={4} shouldWrapChildren>
            <Box
              color="black"
              fontFamily="'Alfa Slab One', cursive"
              fontSize={["30px", "35px", "50px", "60px"]}
            >
              Jobs 4 Juniors
            </Box>
            <form
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
              onSubmit={(event) => {
                event.preventDefault();
                setJoblist(
                  search
                    ? originalList.current.filter((job) =>
                        job.title
                          .trim()
                          .toLowerCase()
                          .includes(search.trim().toLowerCase())
                      )
                    : originalList.current
                );
              }}
            >
              <Stack
                isInline
                justify={"space-between"}
                align="center"
                direction="row"
                w="100%"
              >
                <Input
                  placeholder="Search for a job"
                  p={[2, 4, 6, 8]}
                  rounded="lg"
                  textAlign="center"
                  fontSize={["sm", "md", "lg", "xl"]}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button p={[2, 4, 6, 8]} rounded="lg" type="submit">
                  Search
                </Button>
              </Stack>
            </form>

            <List
              w="90vw"
              maxW="950px"
              fontSize={["xs", "sm", "md", "lg"]}
              textAlign="left"
              isTruncated
            >
              {isLoading && (
                <Flex justify="center" mt={[2, 4, 6, 8]}>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Flex>
              )}
              {!isLoading && <JobListItem joblist={joblist} />}
            </List>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ColorModeProvider,
  Flex,
  FormLabel,
  Input,
  List,
  Select,
  Spinner,
  Stack,
  Switch,
  ThemeProvider,
} from "@chakra-ui/core";
import JobListItem from "./components/JobListItem";
import api from "./api";
import "./global.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function addFavorite(id, favorites) {
  return [...favorites, id];
}

function removeFavorite(id, favorites) {
  return favorites.filter((element) => element !== id);
}

function getComparableDate(dateString) {
  return new Date(dateString).getTime();
}

function withSortedByDate(sortOrder, list) {
  switch (sortOrder) {
    case "mostrecent":
      return [...list].sort((a, b) =>
        getComparableDate(a.date) < getComparableDate(b.date) ? 1 : -1
      );
    case "leastrecent":
      return [...list].sort((a, b) =>
        getComparableDate(b.date) < getComparableDate(a.date) ? 1 : -1
      );
    case "alphabetically":
      return [...list].sort((a, b) => (b.company < a.company ? 1 : -1));
    default:
      break;
  }
}

function App() {
  const textSize = ["10px", "12px", "15px", "18px", "19px"];
  const [joblist, setJoblist] = useState([]);
  const [search, setSearch] = useState(
    new URLSearchParams(window.location.search).get("q")
  );
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem("favorites-list");
    return localData ? JSON.parse(localData) : [];
  });
  const [toggleFavorites, setToggleFavorites] = useState(false);
  const originalList = useRef();

  useEffect(() => {
    setIsLoading(true);
    api.getJobs().then((data) => {
      const sorted = withSortedByDate("mostrecent", data.jobs);
      setJoblist(sorted);
      originalList.current = sorted;
      setIsLoading(false);
      // eslint-disable react-hooks/exhaustive-deps
      filterJobListBySearch();
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites-list", JSON.stringify(favorites));
  }, [favorites]);

  function filterJobListBySearch() {
    setJoblist(
      search
        ? originalList.current.filter((job) =>
            job.title.trim().toLowerCase().includes(search.trim().toLowerCase())
          )
        : originalList.current
    );
  }

  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Flex
          height="100%"
          direction="column"
          align="center"
          justify="flex-start"
          px={[4, 5, 6, 7, 8]}
          py={["50px", "60px", "70px", "80px", "100px"]}
          textAlign="center"
        >
          <Stack spacing={4} shouldWrapChildren>
            <Box
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
                setSearch(search);
                if (search != null) {
                  history.push("/?q=" + search);
                }
                filterJobListBySearch();
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
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button p={[2, 4, 6, 8]} rounded="lg" type="submit">
                  Search
                </Button>
              </Stack>
            </form>

            <Flex
              direction={["column", "row"]}
              justify="space-between"
              align="center"
            >
              <Box my="5px">
                <FormLabel htmlFor="toggle-favorite">Show Favorites</FormLabel>
                <Switch
                  id="toggle-favorite"
                  onChange={() => setToggleFavorites(!toggleFavorites)}
                />
              </Box>
              <Box my="5px" spacing="8px" width={["100%", "250px", "300px"]}>
                <Select
                  fontSize={textSize}
                  variant="outline"
                  backgroundColor="gray.200"
                  borderColor="gray.300"
                  onChange={(e) => {
                    setJoblist(withSortedByDate(e.target.value, joblist));
                  }}
                >
                  <option value="mostrecent">Most Recent</option>
                  <option value="leastrecent">Least Recent</option>
                  <option value="alphabetically">A-Z</option>
                </Select>
              </Box>
            </Flex>

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
              {!isLoading && (
                <JobListItem
                  joblist={
                    toggleFavorites
                      ? joblist.filter((job) => favorites.includes(job.id))
                      : joblist
                  }
                  favorites={favorites}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                  setFavorites={setFavorites}
                  toggleFavorites={toggleFavorites}
                  textSize={textSize}
                />
              )}
            </List>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

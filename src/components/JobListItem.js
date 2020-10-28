import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Icon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/core";
import moment from "moment";

function formatDate(date) {
  return moment(date).format("MMM DD");
}

function addFavorite(id, favorites) {
  return [...favorites, id];
}

function removeFavorite(id, favorites) {
  return favorites.filter((element) => element !== id);
}

function JobList({ joblist }) {
  const [favorites, setFavorites] = useState([]);
  const textSize = ["9px", "12px", "15px", "18px", "19px"];
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  if (joblist.length === 0) {
    return <Text>No matches found</Text>;
  }
  return joblist.map(
    ({ id, date, title, contract, employer, URL, skillLevel }) => (
      <ListItem
        key={id}
        p={[1, 2, 3, 4]}
        pl="1rem"
        bg={formatDate(date) === "Sep 24" ? "yellow.100" : "white"}
        borderRight={
          formatDate(date) === "Sep 24"
            ? "0.4rem solid #ffd500"
            : "0.4rem solid white"
        }
        display={skillLevel < 3 ? "block" : "none"}
        spacing="8px"
        shouldWrapChildren
      >
        <Stack
          isInline
          justify="space-between"
          align="center"
          shouldWrapChildren
        >
          <Box isTruncated>
            <Stack as="a" href={URL} target="_blank">
              <Text fontSize={textSize} isTruncated>
                {employer}
              </Text>
              <Text as="strong" fontSize={textSize} isTruncated>
                {title}
              </Text>
              <Text fontSize={textSize} isTruncated>
                {contract}
              </Text>
            </Stack>
          </Box>
          <Box>
            <Text fontSize={textSize} textAlign="center" isTruncated>
              {formatDate(date) === "Sep 24" && (
                <Badge variantColor="red" mb="5px">
                  New
                </Badge>
              )}
            </Text>

            <Text as="strong" isTruncated>
              {formatDate(date)}
            </Text>
            <Box>
              <Button
                backgroundColor="clear"
                onClick={() => {
                  setFavorites(
                    favorites.includes(id)
                      ? removeFavorite(id, favorites)
                      : addFavorite(id, favorites)
                  );
                }}
              >
                <Icon
                  name="star"
                  color={favorites.includes(id) ? "orange.300" : "gray.500"}
                  size="1.4rem"
                />
              </Button>
            </Box>
          </Box>
        </Stack>
      </ListItem>
    )
  );
}

export default JobList;

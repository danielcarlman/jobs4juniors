import React from "react";
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

function JobList({
  addFavorite,
  favorites,
  joblist,
  removeFavorite,
  setFavorites,
  toggleFavorites,
  textSize,
}) {
  if (toggleFavorites && !favorites.length) {
    return <Text>Favorites list is empty</Text>;
  }

  if (!joblist.length) {
    return <Text>No matches found</Text>;
  }

  console.log({ joblist });

  return joblist.map(
    ({ id, date, title, type, company, link, skillLevel, isNew }) => (
      <ListItem
        key={id}
        p="1rem"
        bg={formatDate(date) === "Sep 24" ? "yellow.100" : "white"}
        borderRight={
          formatDate(date) === "Sep 24"
            ? "0.4rem solid #ffd500"
            : "0.4rem solid white"
        }
        // display={skillLevel < 3 ? "block" : "none"}
        spacing="8px"
        shouldWrapChildren
      >
        <Stack isInline align="center">
          <Box w="100%" isTruncated>
            <Stack as="a" href={link} target="_blank">
              <Text fontSize={textSize}>{company}</Text>
              <Text as="strong" fontSize={textSize}>
                {title}
              </Text>
              <Text fontSize={textSize}>{type}</Text>
            </Stack>
          </Box>
          <Box data="job-right-side" maxW="80px" textAlign="center">
            <Box data="job-date">
              {isNew && (
                <Box fontSize={textSize} textAlign="center" isTruncated>
                  <Badge
                    variantColor="red"
                    mb="5px"
                    fontSize={["10px", "12px", "12px", "15px", "15px"]}
                  >
                    New
                  </Badge>
                </Box>
              )}
              <Text as="strong" fontSize={textSize} isTruncated>
                {formatDate(date)}
              </Text>
            </Box>
            <Box data="job-favorite-button">
              <Button
                h={["0.5rem", "1rem", "1rem", "1rem", "2.5rem"]}
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
                  size={["0.8rem", "1rem", "1.2rem", "1.4rem", "1.6rem"]}
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

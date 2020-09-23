import React from 'react';
import { Box, ListItem, Stack, Text } from '@chakra-ui/core';

function JobList() {
  return (
    <ListItem
      py={[1, 2, 3, 4]}
      pl='1rem'
      pr={['1rem', '5rem', '10rem']}
      bg='yellow.100'
      borderRight='0.4rem solid #ffd500'
    >
      <Stack isInline spacing={8} justify='space-between' align='center'>
        <Box isTruncated>
          <Stack>
            <Text fontSize='16px' isTruncated>
              Power Home Remodeling
            </Text>
            <Text as='strong' fontSize='19.2px' isTruncated>
              User Experience Engineer
            </Text>
            <Text fontSize='16px' isTruncated>
              Full-Time/Anywhere (100% Remote) Only
            </Text>
          </Stack>
        </Box>
        <Box>
          <Text as='strong' fontSize='16px' isTruncated>
            Sep 14
          </Text>
        </Box>
      </Stack>
    </ListItem>
  );
}

export default JobList;

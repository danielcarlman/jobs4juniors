import React from 'react';
import { Box, ListItem, Stack, Text } from '@chakra-ui/core';
import mockAPI from '../mockAPI';

function JobList() {
  return mockAPI.map((job) => (
    <ListItem
      py={[1, 2, 3, 4]}
      pl='1rem'
      pr={['1rem', '5rem', '10rem']}
      bg={job.date === 'Sep 24' ? 'yellow.100' : 'white'}
      borderRight={job.date === 'Sep 24' ? '0.4rem solid #ffd500' : 'none'}
      display={job.isEntryLevel ? 'block' : 'none'}
    >
      <Stack isInline spacing={8} justify='space-between' align='center'>
        <Box isTruncated>
          <Stack>
            <Text isTruncated>{job.employer}</Text>
            <Text as='strong' fontSize='19.2px' isTruncated>
              {mockAPI.title}
            </Text>
            <Text isTruncated>{job.contract}</Text>
          </Stack>
        </Box>
        <Box>
          <Text as='strong' isTruncated>
            {job.date}
          </Text>
        </Box>
      </Stack>
    </ListItem>
  ));
}

export default JobList;

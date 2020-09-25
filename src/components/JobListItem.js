import React from 'react';
import { Badge, Box, ListItem, Stack, Text } from '@chakra-ui/core';
import mockAPI from '../mockAPI';

function JobList() {
  const textSize = ['9px', '12px', '15px', '18px', '19.2px'];
  return mockAPI.map((job) => (
    <ListItem
      as='a'
      href={job.URL}
      target='_blank'
      py={[1, 2, 3, 4]}
      pl='1rem'
      pr={['1rem', '5rem', '10rem']}
      bg={job.date === 'Sep 24' ? 'yellow.100' : 'white'}
      borderRight={
        job.date === 'Sep 24' ? '0.4rem solid #ffd500' : '0.4rem solid white'
      }
      display={job.isEntryLevel ? 'block' : 'none'}
      spacing='8px'
      shouldWrapChildren
    >
      <Stack isInline justify='space-between' align='center' shouldWrapChildren>
        <Box isTruncated>
          <Stack isTruncated>
            <Text fontSize={textSize} isTruncated>
              {job.employer}
            </Text>
            <Text as='strong' fontSize={textSize} isTruncated>
              {job.title}
            </Text>
            <Text fontSize={textSize} isTruncated>
              {job.contract}
            </Text>
          </Stack>
        </Box>
        <Box>
          <Text fontSize={textSize} textAlign='center' isTruncated>
            {job.date === 'Sep 24' && (
              <Badge variantColor='red' mb='5px'>
                New
              </Badge>
            )}
          </Text>

          <Text as='strong' isTruncated>
            {job.date}
          </Text>
        </Box>
      </Stack>
    </ListItem>
  ));
}

export default JobList;

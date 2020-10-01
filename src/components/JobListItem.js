import React from 'react';
import { Badge, Box, ListItem, Stack, Text } from '@chakra-ui/core';
import mockAPI from '../mockAPI';

function JobList() {
  const textSize = ['9px', '12px', '15px', '18px', '19px'];
  return mockAPI.map(({ date, title, contract, employer, URL, skillLevel }) => (
    <ListItem
      as='a'
      href={URL}
      target='_blank'
      py={[1, 2, 3, 4]}
      pl='1rem'
      pr={['1rem', '5rem', '10rem']}
      bg={date === 'Sep 24' ? 'yellow.100' : 'white'}
      borderRight={
        date === 'Sep 24' ? '0.4rem solid #ffd500' : '0.4rem solid white'
      }
      display={skillLevel < 3 ? 'block' : 'none'}
      spacing='8px'
      shouldWrapChildren
    >
      <Stack isInline justify='space-between' align='center' shouldWrapChildren>
        <Box isTruncated>
          <Stack isTruncated>
            <Text fontSize={textSize} isTruncated>
              {employer}
            </Text>
            <Text as='strong' fontSize={textSize} isTruncated>
              {title}
            </Text>
            <Text fontSize={textSize} isTruncated>
              {contract}
            </Text>
          </Stack>
        </Box>
        <Box>
          <Text fontSize={textSize} textAlign='center' isTruncated>
            {date === 'Sep 24' && (
              <Badge variantColor='red' mb='5px'>
                New
              </Badge>
            )}
          </Text>

          <Text as='strong' isTruncated>
            {new Date(date).toISOString()}
          </Text>
        </Box>
      </Stack>
    </ListItem>
  ));
}

export default JobList;

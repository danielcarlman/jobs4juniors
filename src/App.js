import React from 'react';
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Flex,
  List,
  Stack,
  Text,
  ThemeProvider,
} from '@chakra-ui/core';
import JobListItem from './components/JobListItem';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <Flex
          h='100vh'
          bg='gray.300'
          direction='column'
          align='center'
          justify='center'
          p={[2, 4, 6, 8]}
          textAlign='center'
        >
          <Stack spacing={4}>
            <Text>Logo</Text>
            <Text>Search Bar</Text>
            <Box
              w='90vw'
              maxW='950px'
              fontSize={['xs', 'sm', 'md', 'lg']}
              textAlign='left'
            >
              <List>
                <Stack spacing={4} shouldWrapChildren>
                  <JobListItem />
                </Stack>
              </List>
            </Box>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Flex,
  Stack,
  ThemeProvider,
} from '@chakra-ui/core';

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
            <Box>Logo</Box>
            <Box>Search Bar</Box>
            <Box>Job Listing</Box>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

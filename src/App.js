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
          justify='flex-start'
          px={[4, 5, 6, 7, 8]}
          py={['50px', '60px', '70px', '80px', '100px']}
          textAlign='center'
        >
          <Stack spacing={4}>
            <Box
              color='black'
              fontFamily="'Alfa Slab One', cursive"
              fontSize={['30px', '35px', '50px', '60px']}
            >
              Jobs 4 Juniors
            </Box>
            <Box>Search Bar</Box>
            <Box>Job Listing</Box>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

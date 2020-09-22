import React from 'react';
import {
  ColorModeProvider,
  CSSReset,
  Input,
  Flex,
  ThemeProvider,
} from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <Flex
          h='100vh'
          bg='gray.200'
          direction='column'
          align='center'
          justify='center'
        >
          <h1>Logo</h1>
          <Input
            placeholder='Search for a job'
            m={[2, 4, 6, 8]}
            p={[2, 4, 5, 6]}
            w='90vw'
            maxW='700px'
            rounded='lg'
            textAlign='center'
          />
          <h1>Job Listing</h1>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

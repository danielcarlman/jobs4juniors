import React from 'react';
import {
  Button,
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
          bg='gray.300'
          direction='column'
          align='center'
          justify='center'
        >
          <h1>Logo</h1>
          <Flex direction='row'>
            <Input
              placeholder='Search for a job'
              m={[1, 2, 3, 4]}
              p={[2, 4, 6, 8]}
              w='50vw'
              maxW='700px'
              rounded='lg'
              textAlign='center'
              fontSize={['sm', 'md', 'lg', 'xl']}
            />
            <Button m={[1, 2, 3, 4]} p={[2, 4, 6, 8]} rounded='lg'>
              Search
            </Button>
          </Flex>
          <h1>Job Listing</h1>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

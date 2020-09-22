import React from 'react';
import {
  ColorModeProvider,
  CSSReset,
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
          <h1>Search Bar</h1>
          <h1>Job Listing</h1>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

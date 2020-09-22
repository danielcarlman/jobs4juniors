import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <h1>React</h1>
    </ThemeProvider>
  );
}

export default App;

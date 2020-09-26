import React from 'react';
import {
  Box,
  Button,
  ColorModeProvider,
  CSSReset,
  Flex,
  Input,
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
            <Box>Logo</Box>
            <Stack isInline spacing={8} align='center' direction='row'>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <Input
                  placeholder='Search for a job'
                  p={[2, 4, 6, 8]}
                  w='50vw'
                  maxW='700px'
                  rounded='lg'
                  textAlign='center'
                  fontSize={['sm', 'md', 'lg', 'xl']}
                />
                <Button p={[2, 4, 6, 8]} rounded='lg' type='submit'>
                  Search
                </Button>
              </form>
            </Stack>

            <List
              w='90vw'
              maxW='950px'
              fontSize={['xs', 'sm', 'md', 'lg']}
              textAlign='left'
              isTruncated
            >
              <JobListItem />
            </List>
          </Stack>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

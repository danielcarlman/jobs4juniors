import React, { useState } from 'react';
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
  const [search, setSearch] = useState('');
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
          <Stack spacing={4} shouldWrapChildren>
            <Box
              color='black'
              fontFamily="'Alfa Slab One', cursive"
              fontSize={['30px', '35px', '50px', '60px']}
            >
              Jobs 4 Juniors
            </Box>
            <form
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Stack
                isInline
                justify={'space-between'}
                align='center'
                direction='row'
                w='100%'
              >
                <Input
                  placeholder='Search for a job'
                  p={[2, 4, 6, 8]}
                  rounded='lg'
                  textAlign='center'
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button p={[2, 4, 6, 8]} rounded='lg' type='submit'>
                  Search
                </Button>
              </Stack>
            </form>

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

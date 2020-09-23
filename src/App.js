import React from 'react';
import {
  Box,
  ColorModeProvider,
  CSSReset,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
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
            <Box
              w='50vw'
              maxW='950px'
              fontSize={['sm', 'md', 'lg', 'xl']}
              textAlign='left'
            >
              <List>
                <Stack spacing={4}>
                  <ListItem
                    p={[1, 2, 3, 4]}
                    bg='yellow.100'
                    borderRight='4px solid #ffd500'
                  >
                    <Stack
                      isInline
                      spacing={8}
                      justify='space-between'
                      align='center'
                    >
                      <Box>
                        <Stack>
                          <Text fontSize='16px'>Power Home Remodeling</Text>
                          <Text as='strong' fontSize='19.2px'>
                            User Experience Engineer
                          </Text>
                          <Text fontSize='16px'>
                            Full-Time/Anywhere (100% Remote) Only
                          </Text>
                        </Stack>
                      </Box>
                      <Box pr='150px'>
                        <Text as='strong' fontSize='16px'>
                          Sep 14
                        </Text>
                      </Box>
                    </Stack>
                  </ListItem>
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

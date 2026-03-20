import { Outlet, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link as ChakraLink,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ColorModeButton } from '@components/ui/color-mode';

function Layout() {
  return (
    <Box minH="100vh">
      <Box as="nav" borderBottomWidth="1px" py={4} mb={8}>
        <Container maxW="6xl">
          <Flex justify="space-between" align="center">
            <ChakraLink asChild variant="plain">
              <RouterLink to="/">
                <Heading size="md">Wind Tunnel Registry</Heading>
              </RouterLink>
            </ChakraLink>
            <Flex gap={6} align="center">
              <ChakraLink asChild>
                <RouterLink to="/">Home</RouterLink>
              </ChakraLink>
              <ChakraLink asChild>
                <RouterLink to="/about">About</RouterLink>
              </ChakraLink>
              <ColorModeButton />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container maxW="6xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default Layout;

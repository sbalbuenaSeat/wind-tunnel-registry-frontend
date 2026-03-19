import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <VStack gap={10} py={10}>
      <Flex gap={10} justify="center" align="center">
        <Box>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <Image src={viteLogo} boxSize="120px" alt="Vite logo" />
          </a>
        </Box>
        <Box>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <Image src={reactLogo} boxSize="120px" alt="React logo" />
          </a>
        </Box>
      </Flex>

      <Heading size="3xl">Vite + React + Chakra UI</Heading>

      <Box
        p={8}
        borderWidth="1px"
        borderRadius="xl"
        textAlign="center"
        w="full"
        maxW="400px"
      >
        <Button
          colorPalette="blue"
          onClick={() => setCount((count) => count + 1)}
          mb={6}
          size="lg"
        >
          count is {count}
        </Button>
        <Text fontSize="md">
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </Text>
      </Box>

      <Text color="fg.muted">
        Click on the Vite and React logos to learn more
      </Text>
    </VStack>
  );
}

export default Home;

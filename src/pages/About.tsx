import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function About() {
  return (
    <VStack gap={6} align="start" py={10}>
      <Heading size="xl">About Wind Tunnel Registry</Heading>
      <Box p={6} borderWidth="1px" borderRadius="lg" w="full">
        <Text fontSize="lg" mb={4}>
          Esta aplicación está construida con las tecnologías más modernas de
          desarrollo frontend.
        </Text>
        <VStack align="start" gap={2}>
          <Text>
            • <strong>React 19:</strong> La última versión de la biblioteca de
            UI.
          </Text>
          <Text>
            • <strong>Vite:</strong> Herramienta de construcción ultrarrápida.
          </Text>
          <Text>
            • <strong>Chakra UI 3:</strong> Sistema de componentes accesible y
            personalizable.
          </Text>
          <Text>
            • <strong>Biome:</strong> Herramienta todo-en-uno para formateo y
            linting.
          </Text>
          <Text>
            • <strong>Vitest:</strong> Framework de testing moderno.
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}

export default About;

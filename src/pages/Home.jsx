import { Box, Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"1g"}
        borderWidth={"1px"}
      >
        <Text fontSize={"4xl"} textAlign={"center"}>
          We Chat
        </Text>
      </Box>
      <Box></Box>
    </Container>
  );
}

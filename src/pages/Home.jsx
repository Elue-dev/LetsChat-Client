import {
  Box,
  Container,
  Text,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

export default function Home() {
  return (
    <Container
      maxW="xl"
      centerContent
      style={{ background: "radial-gradient(#525252, #070606)" }}
    >
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
          Let's Chat
        </Text>
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"1g"}
        borderWidth={"1px"}
        textColor={"black"}
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs> */}
      </Box>
    </Container>
  );
}

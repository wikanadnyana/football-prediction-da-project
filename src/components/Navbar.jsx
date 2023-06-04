import { Flex, Heading, Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <Flex p="30px" bg="blue.400" justify="space-between">
            <Heading color="white">FM Predict</Heading>
            <Tabs
                colorScheme="whiteAlpha"
                size="lg"
                sx={{
                    "& .chakra-tabs__tab": {
                        "&:focus": {
                            boxShadow: "none",
                            borderColor: "transparent",
                        },
                    },
                }}
            >
                <TabList>
                    <Tab as={Link} to="/">
                        Home
                    </Tab>
                    <Tab as={Link} to="/create">
                        About
                    </Tab>
                    <Tab as={Link} to="/profile">
                        Profile
                    </Tab>
                </TabList>
            </Tabs>
        </Flex>
    );
};

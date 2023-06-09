import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Box, Grid, GridItem, Heading, Image, Flex } from "@chakra-ui/react";

export const RootLayout = () => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 2, xl: 1 }}
                bg="blue.400"
                minHeight={{ lg: "100vh" }}
                p={{ base: "20px", lg: "30px" }}
            >
                <Flex alignItems="center">
                    <Image boxSize="30px" src="/images/ball.png" alt="ball" />
                    <Heading paddingLeft="10px" size="md" color="white">
                        FM Predict
                    </Heading>
                </Flex>
                <Flex alignItems="center" marginTop="20px">
                    <Sidebar />
                </Flex>
            </GridItem>
            <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
                <Flex flexDirection="column" h="100%">
                    <Navbar />
                    <Outlet />
                </Flex>
            </GridItem>
        </Grid>
    );
};

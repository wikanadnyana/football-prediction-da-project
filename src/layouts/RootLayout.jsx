import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Box, Grid, GridItem, Heading, Image, Flex } from "@chakra-ui/react";

export const RootLayout = () => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem
                as="aside"
                colSpan="1"
                bg="blue.400"
                minHeight="100vh"
                p="30px"
            >
                <Flex alignItems="center">
                    <Image boxSize="30px" src="/images/ball.png" alt="ball" />
                    <Heading paddingLeft="10px" size="md" color="white">
                        FM Predict
                    </Heading>
                </Flex>
            </GridItem>
            <GridItem as="main" colSpan="5" p="40px">
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
    );
};

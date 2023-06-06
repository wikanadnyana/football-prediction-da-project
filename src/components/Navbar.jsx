import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    Tab,
    TabList,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    const renderLeftContent = () => {
        if (location.pathname == "/ramal") {
            return <Heading as="h1">Prediksi</Heading>;
        } else if (location.pathname == "/klasemen") {
            return <Heading as="h1">Klasemen</Heading>;
        }
    };

    const renderRightContent = () => {
        if (location.pathname == "/ramal") {
            return <Button colorScheme="blue">Create</Button>;
        } else if (location.pathname == "/klasemen") {
            return <Text>©kelompok4</Text>;
        }
    };

    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Box>{renderLeftContent()}</Box>
            <Spacer />
            <Box>{renderRightContent()}</Box>
        </Flex>
    );
};

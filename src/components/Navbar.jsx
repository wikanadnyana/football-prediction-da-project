import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
// import { InputForm } from "./InputForm";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    // const [isModalOpen, setModalOpen] = useState(false);

    // const openModal = () => {
    //     setModalOpen(true);
    // };

    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    const renderLeftContent = () => {
        if (location.pathname == "/ramal") {
            return <Heading as="h1">Prediksi</Heading>;
        } else if (location.pathname == "/klasemen") {
            return <Heading as="h1">Klasemen</Heading>;
        }
    };

    const renderRightContent = () => {
        if (location.pathname == "/ramal") {
            return (
                <>
                    <Button colorScheme="blue" onClick={onOpen}>
                        Create
                    </Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Form Data Match</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Home Team</FormLabel>
                                    <Input
                                        ref={initialRef}
                                        placeholder="e.g Manchester City"
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Away Team</FormLabel>
                                    <Input placeholder="e.g Arsenal" />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Date</FormLabel>
                                    <Input type="date" placeholder="Date" />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Group</FormLabel>
                                    <Input placeholder="e.g A" />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            );
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

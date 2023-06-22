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
import axios from "axios";

export const Navbar = () => {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");
    const [date, setDate] = useState("");
    const [group, setGroup] = useState("");
    const [hour, setHour] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault(); // Untuk mencegah form dikirim secara default

        // Lakukan logika pengiriman data ke server atau tindakan lainnya

        // Contoh menggunakan Axios untuk mengirim data
        axios
            .post("http://localhost:5000/api/predict", {
                home_code: homeTeam,
                opp_code: awayTeam,
                date: date,
                group: group,
                hour: hour,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        onClose(); // Menutup modal setelah form dikirim
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
                        <form onSubmit={handleSubmit}>
                            <ModalContent>
                                <ModalHeader>Form Data Match</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Home Team</FormLabel>
                                        <Input
                                            ref={initialRef}
                                            placeholder="e.g Manchester City"
                                            value={homeTeam}
                                            onChange={(e) =>
                                                setHomeTeam(e.target.value)
                                            }
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Away Team</FormLabel>
                                        <Input
                                            placeholder="e.g Arsenal"
                                            value={awayTeam}
                                            onChange={(e) =>
                                                setAwayTeam(e.target.value)
                                            }
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Date</FormLabel>
                                        <Input
                                            type="date"
                                            placeholder="Date"
                                            value={date}
                                            onChange={(e) =>
                                                setDate(e.target.value)
                                            }
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Group</FormLabel>
                                        <Input
                                            placeholder="e.g A"
                                            value={group}
                                            onChange={(e) =>
                                                setGroup(e.target.value)
                                            }
                                        />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Hour</FormLabel>
                                        <Input
                                            placeholder="e.g 15"
                                            value={hour}
                                            onChange={(e) =>
                                                setHour(e.target.value)
                                            }
                                        />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        colorScheme="blue"
                                        mr={3}
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </form>
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

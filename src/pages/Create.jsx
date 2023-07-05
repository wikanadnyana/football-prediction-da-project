import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as d3 from "d3";
import { AttachmentIcon, DeleteIcon } from "@chakra-ui/icons";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Flex,
} from "@chakra-ui/react";
import { PieChart } from "../components/PieChart";
import c3 from "c3";

export const Create = () => {
    // const generateData = (homePrediction, awayPrediction) => {
    //     return [
    //       {
    //         date: 0,
    //         value: homePrediction},
    //       {
    //         date: 1,
    //         value: awayPrediction
    //       },
    //     ];
    //   };

    // const [data, setData] = useState(generateData(null, null));
    const teamName = (teamCode) => {
        if (teamCode == 0) {
            return "Arsenal";
        } else if (teamCode == 1) {
            return "Aston Villa";
        } else if (teamCode == 2) {
            return "Bournemouth";
        } else if (teamCode == 3) {
            return "Brentford";
        } else if (teamCode == 4) {
            return "Brighton";
        } else if (teamCode == 5) {
            return "Chelsea";
        } else if (teamCode == 6) {
            return "Crystal Palace";
        } else if (teamCode == 7) {
            return "Everton";
        } else if (teamCode == 8) {
            return "Fulham";
        } else if (teamCode == 9) {
            return "Leeds United";
        } else if (teamCode == 10) {
            return "Leicester City";
        } else if (teamCode == 11) {
            return "Liverpool";
        } else if (teamCode == 12) {
            return "Manchester City	";
        } else if (teamCode == 13) {
            return "Manchester United";
        } else if (teamCode == 14) {
            return "Newcastle";
        } else if (teamCode == 15) {
            return "Nottingham Forest";
        } else if (teamCode == 16) {
            return "Southampton";
        } else if (teamCode == 17) {
            return "Tottenham";
        } else if (teamCode == 18) {
            return "West Ham";
        } else if (teamCode == 19) {
            return "Wolves";
        }
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [teamData, setTeamData] = useState([]);
    const [detailData, setDetailData] = useState({
        id: " ",
        home_prediction: " ",
        away_prediction: " ",
        draw_prediction: " ",
    });

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        const fetchData = () => {
            fetch("http://localhost:5000/api/predictions")
                .then((response) => response.json())
                .then((data) => {
                    setTeamData(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        fetchData(); // Initial data fetch

        // Fetch data every 5 seconds (adjust the interval as needed)
        const intervalId = setInterval(fetchData, 1000);

        return () => {
            // Cleanup interval when the component is unmounted
            clearInterval(intervalId);
        };
    }, []);

    // useEffect(() => {
    //     const chartData = teamData.map((team) => {
    //         return {
    //             teamName: teamName(team.home_code),
    //             homePrediction: team.home_prediction,
    //             awayPrediction: team.away_prediction,
    //             drawPrediction: team.draw_prediction,
    //         };
    //     });

    //     const chartColumns = [
    //         ["Home", ...chartData.map((data) => data.homePrediction)],
    //         ["Away", ...chartData.map((data) => data.awayPrediction)],
    //         ["Draw", ...chartData.map((data) => data.drawPrediction)],
    //     ];

    //     c3.generate({
    //         bindto: "#chart",
    //         data: {
    //             columns: chartColumns,
    //             type: "pie",
    //         },
    //         axis: {
    //             x: {
    //                 type: "category",
    //                 categories: chartData.map((data) => data.teamName),
    //             },
    //         },
    //     });
    // }, [teamData]);

    const getDetail = (id) => {
        fetch(`http://localhost:5000/api/predictions/${id}`) // Menggunakan URL dengan ID yang diberikan
            .then((response) => response.json())
            .then((data) => {
                setDetailData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        onOpen();
    };

    return (
        <div data-aos="fade-up">
            <TableContainer paddingTop="30px">
                <Table variant="striped" colorScheme="blue">
                    <Thead>
                        <Tr>
                            <Th textAlign="center">Home Team</Th>
                            <Th textAlign="center">Away Team</Th>
                            <Th textAlign="center">Date</Th>
                            <Th textAlign="center">Group</Th>
                            <Th textAlign="center">Result</Th>
                            <Th textAlign="center">Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {teamData.map((team) => (
                            <Tr key={team.teamId}>
                                <Td textAlign="center">
                                    {teamName(team.home_code)}
                                </Td>
                                <Td textAlign="center">
                                    {teamName(team.opp_code)}
                                </Td>
                                <Td textAlign="center">{team.match_date}</Td>
                                <Td textAlign="center">{team.group}</Td>
                                <Td id="chart">
                                    <PieChart
                                        data={[
                                            {
                                                date: 0,
                                                value: team.home_prediction,
                                            },
                                            {
                                                date: 1,
                                                value: team.away_prediction,
                                            },
                                            {
                                                date: 2,
                                                value: team.draw_prediction,
                                            },
                                        ]}
                                        width={100}
                                        height={100}
                                        innerRadius={0}
                                        outerRadius={50}
                                    />
                                    {/* <Flex id="chart"></Flex>; */}
                                </Td>
                                <Td textAlign="center">
                                    <>
                                        {/* <Button
                                            onClick={() => getDetail(team.id)}
                                        >
                                            Detail
                                        </Button> */}
                                        <IconButton
                                            aria-label="Search database"
                                            icon={<AttachmentIcon />}
                                            onClick={() => getDetail(team.id)}
                                            colorScheme="blue"
                                        />
                                        {/* <IconButton
                                            aria-label="Search database"
                                            icon={<DeleteIcon />}
                                            marginLeft="5px"
                                            colorScheme="blue"
                                        /> */}

                                        <Modal
                                            isOpen={isOpen}
                                            onClose={onClose}
                                        >
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>
                                                    Detail Prediksi :
                                                </ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    Home Prediction :{" "}
                                                    {detailData.home_prediction}
                                                    % Away Prediction :{" "}
                                                    {detailData.away_prediction}
                                                    % Draw Prediction :{" "}
                                                    {detailData.draw_prediction}
                                                    %
                                                </ModalBody>

                                                <ModalFooter>
                                                    <Button
                                                        colorScheme="blue"
                                                        mr={3}
                                                        onClick={onClose}
                                                    >
                                                        Close
                                                    </Button>
                                                </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

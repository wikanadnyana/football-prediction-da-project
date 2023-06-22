import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as d3 from "d3";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { PieChart } from "../components/PieChart";

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
    const [teamData, setTeamData] = useState([]);

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
                            {/* <Th textAlign="center">Action</Th> */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {teamData.map((team, index) => (
                            <Tr key={index}>
                                <Td textAlign="center">{team.home_code}</Td>
                                <Td textAlign="center">{team.opp_code}</Td>
                                <Td textAlign="center">{team.match_date}</Td>
                                <Td textAlign="center">{team.group}</Td>
                                <Td>
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
                                        ]}
                                        width={100}
                                        height={100}
                                        innerRadius={0}
                                        outerRadius={50}
                                    />
                                </Td>
                                <Td textAlign="center"></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

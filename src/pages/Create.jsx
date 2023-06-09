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
    const generateData = (value, length = 3) =>
        d3.range(length).map((item, index) => ({
            date: index,
            value:
                value === null || value === undefined
                    ? Math.random() * 100
                    : value,
        }));

    const [data, setData] = useState(generateData(0));
    const changeData = () => {
        setData(generateData());
    };

    useEffect(() => {
        setData(generateData());
        AOS.init();
        AOS.refresh();
    }, [!data]);

    const teamData = [
        {
            homeTeam: "Manchester City",
            awayTeam: "Manchester United",
            group: "Group A",
            date: "10-05-2023",
        },
        {
            homeTeam: "Arsenal",
            awayTeam: "Chelsea",
            group: "Group A",
            date: "10-05-2023",
        },
        {
            homeTeam: "Everton",
            awayTeam: "Tottenham",
            group: "Group A",
            date: "10-05-2023",
        },
    ];
    return (
        <div data-aos="fade-up">
            <TableContainer paddingTop="30px">
                <Table variant="striped" colorScheme="blue">
                    <Thead>
                        <Tr>
                            <Th textAlign="center">Home Team</Th>
                            <Th textAlign="center">Away Team</Th>
                            <Th textAlign="center">Group</Th>
                            <Th textAlign="center">Date</Th>
                            <Th textAlign="center">Result</Th>
                            <Th textAlign="center">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {teamData.map((team, index) => (
                            <Tr key={index}>
                                <Td textAlign="center">{team.homeTeam}</Td>
                                <Td textAlign="center">{team.awayTeam}</Td>
                                <Td textAlign="center">{team.date}</Td>
                                <Td textAlign="center">{team.group}</Td>
                                <Td>
                                    <PieChart
                                        data={data}
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

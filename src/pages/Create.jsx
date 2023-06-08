import React, { useState, useEffect } from "react";
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
    }, [!data]);
    return (
        <TableContainer paddingTop="30px">
            <Table variant="striped" colorScheme="blue">
                <Thead>
                    <Tr>
                        <Th textAlign="center">Home Team</Th>
                        <Th textAlign="center">Away Team</Th>
                        <Th textAlign="center">Group</Th>
                        <Th textAlign="center">Date</Th>
                        <Th textAlign="center">Result</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td textAlign="center">Manchester City</Td>
                        <Td textAlign="center">Manchester United</Td>
                        <Td textAlign="center">Group A</Td>
                        <Td textAlign="center">10-05-2023</Td>
                        <Td>
                            <PieChart
                                data={data}
                                width={100}
                                height={100}
                                innerRadius={0}
                                outerRadius={50}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td textAlign="center">Manchester City</Td>
                        <Td textAlign="center">Manchester United</Td>
                        <Td textAlign="center">Group A</Td>
                        <Td textAlign="center">10-05-2023</Td>
                        <Td>
                            <PieChart
                                data={data}
                                width={100}
                                height={100}
                                innerRadius={0}
                                outerRadius={50}
                            />
                        </Td>
                    </Tr>
                    <Tr>
                        <Td textAlign="center">Manchester City</Td>
                        <Td textAlign="center">Manchester United</Td>
                        <Td textAlign="center">Group A</Td>
                        <Td textAlign="center">10-05-2023</Td>
                        <Td>
                            <PieChart
                                data={data}
                                width={100}
                                height={100}
                                innerRadius={0}
                                outerRadius={50}
                            />
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import {
    Text,
    Button,
    Heading,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
} from "@chakra-ui/react";
import { PieChart } from "../components/PieChart";

export const Profile = () => {
    const generateData = (value, length = 5) =>
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
        <div>
            <PieChart
                data={data}
                width={100}
                height={100}
                innerRadius={20}
                outerRadius={50}
            />
        </div>
    );
};

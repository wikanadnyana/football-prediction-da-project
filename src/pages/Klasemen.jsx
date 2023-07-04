import React, { useState, useEffect } from "react";
import c3 from "c3";
import { Flex, Spacer } from "@chakra-ui/react";

export const Klasemen = () => {
    useEffect(() => {
        c3.generate({
            bindto: "#chart",
            data: {
                columns: [
                    ["Total Prediksi", 30, 200, 100],
                    // ["data2", 50, 20, 10, 40, 15, 25],
                ],
                type: "bar",
            },
            axis: {
                x: {
                    type: "category",
                    categories: [
                        "Manchester City",
                        "Manchester United",
                        "Arsenal",
                    ],
                },
            },
        });
    }, []);

    return <Flex marginTop="30px" id="chart"></Flex>;
};

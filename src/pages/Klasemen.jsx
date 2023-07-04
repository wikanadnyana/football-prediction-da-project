import React, { useState, useEffect } from "react";
import c3 from "c3";
import { Flex, Spacer } from "@chakra-ui/react";

const teamName = (teamCode) => {
    if (teamCode === 0) {
        return "Arsenal";
    } else if (teamCode === 1) {
        return "Aston Villa";
    } else if (teamCode === 2) {
        return "Bournemouth";
    } else if (teamCode === 3) {
        return "Brentford";
    } else if (teamCode === 4) {
        return "Brighton";
    } else if (teamCode === 5) {
        return "Chelsea";
    } else if (teamCode === 6) {
        return "Crystal Palace";
    } else if (teamCode === 7) {
        return "Everton";
    } else if (teamCode === 8) {
        return "Fulham";
    } else if (teamCode === 9) {
        return "Leeds United";
    } else if (teamCode === 10) {
        return "Leicester City";
    } else if (teamCode === 11) {
        return "Liverpool";
    } else if (teamCode === 12) {
        return "Manchester City";
    } else if (teamCode === 13) {
        return "Manchester United";
    } else if (teamCode === 14) {
        return "Newcastle";
    } else if (teamCode === 15) {
        return "Nottingham Forest";
    } else if (teamCode === 16) {
        return "Southampton";
    } else if (teamCode === 17) {
        return "Tottenham";
    } else if (teamCode === 18) {
        return "West Ham";
    } else if (teamCode === 19) {
        return "Wolves";
    }
};

export const Klasemen = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch("http://localhost:5000/api/klasemen")
                .then((response) => response.json())
                .then((data) => {
                    const transformedData = data.map((team) => ({
                        ...team,
                        teamName: teamName(team.team_id),
                    }));
                    setTeamData(transformedData);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        fetchData(); // Initial data fetch

        // Fetch data every 5 seconds (adjust the interval as needed)
        const intervalId = setInterval(fetchData, 5000);

        return () => {
            // Cleanup interval when the component is unmounted
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (teamData.length > 0) {
            generateChart(teamData);
        }
    }, [teamData]);

    const generateChart = (data) => {
        const chartColumns = [["Total Prediksi"]];
        const chartCategories = [];

        data.forEach((team) => {
            const teamIndex = chartCategories.indexOf(team.teamName);

            if (teamIndex !== -1) {
                // Jika tim sudah ada dalam chartCategories, perbarui nilai di chartColumns
                chartColumns[0][teamIndex + 1] = team.total_pred;
            } else {
                // Jika tim belum ada dalam chartCategories, tambahkan ke chartCategories dan tambahkan nilai kosong di chartColumns
                chartCategories.push(team.teamName);
                chartColumns[0].push(team.total_pred);
            }
        });

        c3.generate({
            bindto: "#chart",
            data: {
                columns: chartColumns,
                type: "bar",
            },
            axis: {
                x: {
                    type: "category",
                    categories: chartCategories,
                },
            },
        });
    };

    return <Flex marginTop="30px" id="chart"></Flex>;
};

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Flex } from "@chakra-ui/react";

export const PieChart = (props) => {
    const styles = {
        textAlign: "center",
    };
    const ref = useRef(null);
    const createPie = d3
        .pie()
        .value((d) => d.value)
        .sort(null);
    const createArc = d3
        .arc()
        .innerRadius(props.innerRadius)
        .outerRadius(props.outerRadius);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const format = d3.format(".2f");

    useEffect(() => {
        const data = createPie(props.data);
        const group = d3.select(ref.current);
        const groupWithData = group.selectAll("g.arc").data(data);

        groupWithData.exit().remove();

        const groupWithUpdate = groupWithData
            .enter()
            .append("g")
            .attr("class", "arc");

        const path = groupWithUpdate
            .append("path")
            .merge(groupWithData.select("path.arc"));

        path.attr("class", "arc")
            .attr("fill", (d, i) => colors(i))
            .transition() // Menambahkan transisi pada elemen path
            .duration(1000) // Durasi transisi dalam milidetik
            .attrTween("d", function (d) {
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function (t) {
                    return createArc(interpolate(t));
                };
            });

        const text = groupWithUpdate
            .append("text")
            .merge(groupWithData.select("text"));

        text.attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
            .style("fill", "white")
            .style("font-size", 10)
            .text((d) => format(d.value));
    }, [props.data]);

    return (
        <Flex justifyContent="center">
            <svg width={props.width} height={props.height}>
                <g
                    ref={ref}
                    transform={`translate(${props.outerRadius} ${props.outerRadius})`}
                />
            </svg>
        </Flex>
    );
};

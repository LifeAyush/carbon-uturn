import * as d3 from "d3"
import { useEffect, useState } from "react"
import "./graph.css"

export default function Graph({
    width = 80,
    height = 50,
    marginX = 10,
    marginY = 10,
}) {
    //using d3 for the first time, might be good to optimize
    //data from https://ourworldindata.org/grapher/annual-co2-emissions-per-country
    //converted from csv to js array

    const temp = [

        { year: 1960, value: -0.11545958 },
        { year: 1961, value: -0.019999769 },
        { year: 1962, value: -0.06404272 },
        { year: 1963, value: -0.036810614 },
        { year: 1964, value: -0.30586153 },
        { year: 1965, value: -0.20442048 },
        { year: 1966, value: -0.1488976 },
        { year: 1967, value: -0.117539294 },
        { year: 1968, value: -0.16864756 },
        { year: 1969, value: -0.03138624 },
        { year: 1970, value: -0.08506408 },
        { year: 1971, value: -0.20588905 },
        { year: 1972, value: -0.09379131 },
        { year: 1973, value: 0.04995016 },
        { year: 1974, value: -0.17252657 },
        { year: 1975, value: -0.110754214 },
        { year: 1976, value: -0.2158369 },
        { year: 1977, value: 0.1030885 },
        { year: 1978, value: 0.005255972 },
        { year: 1979, value: 0.09085814 },
        { year: 1980, value: 0.19607204 },
        { year: 1981, value: 0.25001204 },
        { year: 1982, value: 0.034268282 },
        { year: 1983, value: 0.22380984 },
        { year: 1984, value: 0.04799352 },
        { year: 1985, value: 0.049729742 },
        { year: 1986, value: 0.09568698 },
        { year: 1987, value: 0.2430264 },
        { year: 1988, value: 0.2821517 },
        { year: 1989, value: 0.1792503 },
        { year: 1990, value: 0.36058238 },
        { year: 1991, value: 0.33889654 },
        { year: 1992, value: 0.12489683 },
        { year: 1993, value: 0.16570719 },
        { year: 1994, value: 0.23354979 },
        { year: 1995, value: 0.37686613 },
        { year: 1996, value: 0.27668938 },
        { year: 1997, value: 0.4223085 },
        { year: 1998, value: 0.5773417 },
        { year: 1999, value: 0.32448497 },
        { year: 2000, value: 0.33108476 },
        { year: 2001, value: 0.48928034 },
        { year: 2002, value: 0.5434665 },
        { year: 2003, value: 0.54417014 },
        { year: 2004, value: 0.46737072 },
        { year: 2005, value: 0.6068625 },
        { year: 2006, value: 0.5725527 },
        { year: 2007, value: 0.5917013 },
        { year: 2008, value: 0.46564984 },
        { year: 2009, value: 0.5967816 },
        { year: 2010, value: 0.6803714 },
        { year: 2011, value: 0.53769773 },
        { year: 2012, value: 0.57760704 },
        { year: 2013, value: 0.6235753 },
        { year: 2014, value: 0.67287165 },
        { year: 2015, value: 0.8251144 },
        { year: 2016, value: 0.9329271 },
        { year: 2017, value: 0.84517425 },
        { year: 2018, value: 0.76265407 },
        { year: 2019, value: 0.8910726 },
        { year: 2020, value: 0.9229205 },
        { year: 2021, value: 0.76190555 },
        { year: 2022, value: 0.8013053 }
    ]

    const data = [{
        year: 1960, value: 316.91
    }, {
        year: 1961, value: 317.64
    }, {
        year: 1962, value: 318.45
    }, {
        year: 1963, value: 318.99
    }, {
        year: 1964, value: 319.62
    }, {
        year: 1965, value: 320.04
    }, {
        year: 1966, value: 321.37
    }, {
        year: 1967, value: 322.18
    }, {
        year: 1968, value: 323.05
    }, {
        year: 1969, value: 324.62
    }, {
        year: 1970, value: 325.68
    }, {
        year: 1971, value: 326.32
    }, {
        year: 1972, value: 327.46
    }, {
        year: 1973, value: 329.68
    }, {
        year: 1974, value: 330.19
    }, {
        year: 1975, value: 331.13
    }, {
        year: 1976, value: 332.03
    }, {
        year: 1977, value: 333.84
    }, {
        year: 1978, value: 335.41
    }, {
        year: 1979, value: 336.84
    }, {
        year: 1980, value: 338.76
    }, {
        year: 1981, value: 340.12
    }, {
        year: 1982, value: 341.48
    }, {
        year: 1983, value: 343.15
    }, {
        year: 1984, value: 344.87
    }, {
        year: 1985, value: 346.35
    }, {
        year: 1986, value: 347.61
    }, {
        year: 1987, value: 349.31
    }, {
        year: 1988, value: 351.69
    }, {
        year: 1989, value: 353.20
    }, {
        year: 1990, value: 354.45
    }, {
        year: 1991, value: 355.70
    }, {
        year: 1992, value: 356.54
    }, {
        year: 1993, value: 357.21
    }, {
        year: 1994, value: 358.96
    }, {
        year: 1995, value: 360.97
    }, {
        year: 1996, value: 362.74
    }, {
        year: 1997, value: 363.88
    }, {
        year: 1998, value: 366.84
    }, {
        year: 1999, value: 368.54
    }, {
        year: 2000, value: 369.71
    }, {
        year: 2001, value: 371.32
    }, {
        year: 2002, value: 373.45
    }, {
        year: 2003, value: 375.98
    }, {
        year: 2004, value: 377.70
    }, {
        year: 2005, value: 379.98
    }, {
        year: 2006, value: 382.09
    }, {
        year: 2007, value: 384.02
    }, {
        year: 2008, value: 385.83
    }, {
        year: 2009, value: 387.64
    }, {
        year: 2010, value: 390.10
    }, {
        year: 2011, value: 391.85
    }, {
        year: 2012, value: 394.06
    }, {
        year: 2013, value: 396.74
    }, {
        year: 2014, value: 398.81
    }, {
        year: 2015, value: 401.01
    }, {
        year: 2016, value: 404.41
    }, {
        year: 2017, value: 406.76
    }, {
        year: 2018, value: 408.72
    }, {
        year: 2019, value: 411.65
    }, {
        year: 2020, value: 414.21
    }, {
        year: 2021, value: 416.41
    }, {
        year: 2022, value: 418.53
    }]

    const [carbonIncrease, setCarbonIncrease] = useState(`${((data[data.length - 1].value - data[0].value).toFixed(2))} ppm`)
    const [tempIncrease, setTempIncrease] = useState(`${((temp[temp.length - 1].value - temp[0].value)).toFixed(3)} °C`)

    useEffect(() => {
        const vw = window.innerWidth / 100
        const vh = window.innerHeight / 100

        const svg = d3
            .select("#graph-container")
            .append("svg")
            .attr("width", (width + 2 * marginX) * vw)
            .attr("height", (height + 2 * marginY) * vh)
            .append("g")
            .attr("transform", `translate(${marginX * vw}, ${marginY * vh})`)

        const x = d3.scaleLinear().range([0, width * vw])
        const y = d3.scaleLinear().range([height * vh, 0])
        const yRight = d3.scaleLinear().range([height * vh, 0])

        x.domain(d3.extent(data, (iter) => iter.year))
        y.domain([0, d3.max(data, (iter) => iter.value)])
        yRight.domain([d3.min(temp, iter => iter.value), d3.max(temp, iter => iter.value)])

        window.innerWidth < 900 ?
            svg.append("g")
                .call(d3.axisBottom(x).ticks(5).tickFormat(val => val))
                .attr("class", "x-axis")
                .attr("transform", `translate(0, ${height * vh})`)
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)
            :
            svg.append("g")
                .call(d3.axisBottom(x).tickFormat(val => val))
                .attr("class", "x-axis")
                .attr("transform", `translate(0, ${height * vh})`)
                .attr("font-size", "1rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)

        if (window.innerWidth > 900) {
            svg.append("g")
                .call(
                    d3
                        .axisLeft(y)
                        .tickFormat((val) => `${val} ppm`)
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis")
                .attr("font-size", "1rem")
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0);

            svg.append("g")
                .call(
                    d3
                        .axisRight(yRight)
                        .tickFormat((val) => val.toFixed(3))
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis-right")
                .attr("transform", `translate(${width * vw}, 0)`)
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0);
        }
        else {
            svg.append("g")
                .call(
                    d3
                        .axisLeft(y)
                        .tickFormat((val) => `${val} ppm`)
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis")
                .attr("font-size", "0.75rem")
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0)

            svg.append("g")
                .call(
                    d3
                        .axisRight(yRight)
                        .tickFormat((val) => val.toFixed(3))
                        .tickSize(0)
                        .tickPadding(10)
                )
                .attr("class", "y-axis-right")
                .attr("transform", `translate(${width * vw}, 0)`)
                .attr("font-size", "0.75rem")
                .call((g) => g.select(".domain").remove())
                .selectAll(".tick line")
                .style("stroke-opacity", 0);

        }

        svg.selectAll(".tick text").attr("fill", "#555")

        svg.selectAll("xGrid")
            .data(x.ticks().slice(1))
            .join("line")
            .attr("x1", d => x(d))
            .attr("x2", d => x(d))
            .attr("y1", 0)
            .attr("y2", height * vh)
            .attr("stroke", "#c8c8c8")
            .attr("stroke-width", .5)

        svg.selectAll("yGrid")
            .data(y.ticks(d3.max(data, d => d.value) / 50).slice(1))
            .join("line")
            .attr("x1", 0)
            .attr("x2", width * vw)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d))
            .attr("stroke", "#c8c8c8")
            .attr("stroke-width", .5)

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -15 - marginX * vw / 2)
            .attr("x", 0 - height * vh / 2)
            .attr("class", "axis-label")
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("Font-size", "16px")
            .style("fill", "#555")
            .style("font-family", "Milliard")
            .text("Average Carbon Dioxide Levels (in ppm)")

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 15 + (width * vw) + (marginX * vw / 2))
            .attr("x", - height * vh / 2)
            .attr("class", "axis-label")
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style("Font-size", "16px")
            .style("fill", "#555")
            .style("font-family", "Milliard")
            .text("Temperature Increase (in C)")

        // svg.append("text")
        //     .attr("y", (height + marginY / 2) * vh)
        //     .attr("x", width * vw / 2)
        //     .attr("dy", "1em")
        //     .style("text-anchor", "middle")
        //     .style("Font-size", "16px")
        //     .style("fill", "#000")
        //     .style("font-family", "Milliard")
        //     .text("Year")

        const tooltip = d3.select("#graph-container")
            .append("div")
            .attr("class", "tooltip");

        const circle = svg.append("circle")
            .attr("r", 0)
            .attr("fill", "steelblue")
            .attr("class", "tooltip-circle")
            .style("stroke", "white")
            .attr("opacity", .70)
            .style("pointer-events", "none");
        // create a listening rectangle

        const listeningRect = svg.append("rect")
            .attr("width", width * vw)
            .attr("height", height * vh)
            .attr("class", "listeningRect");

        // create the mouse move function

        listeningRect.on("mousemove", function (event) {
            const [xCoord] = d3.pointer(event, this);
            const bisectDate = d3.bisector(d => d.year).left;
            const x0 = x.invert(xCoord);
            const i = bisectDate(data, x0, 1);
            const d0 = data[i - 1];
            const d1 = data[i] || { value: 0, year: 0 };
            const d = x0 - d0.year > d1.year - x0 ? d1 : d0;
            const xPos = x(d.year);
            const yPos = y(d.value);


            // Update the circle position

            circle.attr("cx", xPos)
                .attr("cy", yPos);

            // Add transition for the circle radius

            circle.transition()
                .duration(50)
                .attr("r", 5);

            // add in  our tooltip

            const tooltipContent = d.value === undefined ? "N/A" :
                `${(d.value)} ppm`
            tooltip
                .style("display", "block")
                .style("left", `${xPos + 100}px`)
                .style("top", `${yPos + 50}px`)
                .html(`<strong>Year:</strong> ${d.year}<br><strong>Carbon Dioxide Level:</strong> ${tooltipContent}<br><strong>Temperature Rise: </strong>${temp.find(obj => obj.year === d.year).value.toFixed(3)}&deg;C`)
        });
        // listening rectangle mouse leave function

        listeningRect.on("mouseleave", function () {
            circle.transition()
                .duration(50)
                .attr("r", 0);

            tooltip.style("display", "none");
        });

        // const sliderRange = sliderBottom()
        //     .min(d3.min(data, d => d.year))
        //     .max(d3.max(data, d => d.year))
        //     .width(300)
        //     .ticks(3)
        //     .default([d3.min(data, d => d.year), d3.max(data, d => d.year)])
        //     .fill(#85bb65);


        // // Add the slider to the DOM
        // const gRange = d3
        //     .select(#slider-range)
        //     .append(svg')
        //     .attr('width', 500)
        //     .attr('height', 100)
        //     .append('g')
        //     .attr('transform', 'translate(90,30)');

        // gRange.call(sliderRange);

        const line = d3
            .line()
            .x((d) => x(d.year))
            .y((d) => y(d.value))

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 1)
            .attr("class", "line-CO")
            .attr("d", line)

        const lineTemp = d3.line().x((d => x(d.year))).y(d => yRight(d.value))
        svg.append("path")
            .datum(temp)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-width", 1)
            .attr("class", "line-temp")
            .attr("d", lineTemp)


    }, [])

    const handleChange = () => {

        if (document.getElementById("num1")?.value < 1960 || document.getElementById("num2")?.value > 2022) {
            alert("Kindly keep your search between the years 1960 and 2022")
            return
        }
        const val = [document.getElementById("num1")?.value || 1960, document.getElementById("num2")?.value || 2022]
        const vw = window.innerWidth / 100
        const vh = window.innerHeight / 100

        const svg = d3
            .select("#graph-container svg")

        const x = d3.scaleLinear().range([0, width * vw])
        const y = d3.scaleLinear().range([height * vh, 0])
        const yRight = d3.scaleLinear().range([height * vh, 0])

        const line = d3
            .line()
            .x((d) => x(d.year))
            .y((d) => y(d.value))

        const lineTemp = d3.line().x(d => x(d.year)).y(d => yRight(d.value))

        // Set new domain for x scale
        x.domain(val);

        // Filter data based on slider values
        const filteredData = data.filter(d => d.year >= val[0] && d.year <= val[1]);
        const filteredTemp = temp.filter(d => d.year >= val[0] && d.year <= val[1]);
        // Update the line and area to new domain
        // Set new domain for y scale based on new data
        y.domain([0, d3.max(filteredData, d => d.value)]);
        yRight.domain([0, d3.max(filteredTemp, d => d.value)])


        // Update the x-axis with new domain

        window.innerWidth > 900 ?
            svg.select(".x-axis")
                .transition()
                .duration(300) // transition duration in ms
                .call(d3.axisBottom(x).tickFormat(val => val))
                .style("stroke-opacity", 0)

            : svg.select(".x-axis")
                .transition()
                .duration(300) // transition duration in ms
                .call(d3.axisBottom(x).ticks(5).tickFormat(val => val))
                .style("stroke-opacity", 0)


        // Update the y-axis with new domain

        svg.select(".line-CO").attr("d", line(filteredData))
        svg.select(".line-temp").attr("d", lineTemp(filteredTemp))

        svg.select(".y-axis")
            .transition()
            .duration(300) // transition duration in ms
            .call(d3
                .axisLeft(y)
                .tickFormat((val) => `${val} ppm`)
                .tickSize(0)
                .tickPadding(10))
            .style("stroke-opacity", 0)

        svg.select(".y-axis-right")
            .transition()
            .duration(300) // transition duration in ms
            .call(d3
                .axisRight(yRight)
                .tickFormat((val) => val.toFixed(3))
                .tickSize(0)
                .tickPadding(10))
            .style("stroke-opacity", 0)



        const listeningRect = d3.select(".listeningRect")
        const circle = d3.select(".tooltip-circle")
        const tooltip = d3.select(".tooltip")

        listeningRect.on("mousemove", function (event) {
            const [xCoord] = d3.pointer(event, this);
            const bisectDate = d3.bisector(d => d.year).left;
            const x0 = x.invert(xCoord);
            const i = bisectDate(filteredData, x0, 1);
            const d0 = filteredData[i - 1];
            const d1 = filteredData[i] || { value: 0, year: 0 };
            const d = x0 - d0.year > d1.year - x0 ? d1 : d0;
            const xPos = x(d.year);
            const yPos = y(d.value);


            // Update the circle position

            circle.attr("cx", xPos)
                .attr("cy", yPos);

            // Add transition for the circle radius

            circle.transition()
                .duration(50)
                .attr("r", 5);

            // add in  our tooltip

            const tooltipContent = d.value === undefined ? "N/A" :
                `${(d.value)} ppm`
            tooltip
                .style("display", "block")
                .style("left", `${xPos + 100}px`)
                .style("top", `${yPos + 50}px`)
                .html(`<strong>Year:</strong> ${d.year}<br><strong>Carbon Dioxide Level:</strong> ${tooltipContent}<br><strong>Temperature Rise: </strong>${temp.find(obj => obj.year === d.year).value.toFixed(3)} °C`)
        });

        setCarbonIncrease(`${((filteredData[filteredData.length - 1].value - filteredData[0].value).toFixed(2))} ppm`)
        setTempIncrease(`${((filteredTemp[filteredTemp.length - 1].value - filteredTemp[0].value)).toFixed(3)} °C`)

    };

    const btnstyle = {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        background: "white",
        border: "1px solid var(--customcolor)",
        borderRadius: "3px",
        color: "var(--customcolor)",
        padding: "2px",
        fontSize: "0.75rem",
        width: "max-content"
    }

    return (
        <section className="graph-component">
            <h1>GLOBAL MEAN STATISTICS</h1>
            <section id="graph-container"></section>
            <div style={{ display: "flex", alignItems: "center ", gap: "15px", margin: "10px 0" }}>
                <div style={{ "--customcolor": "#FD4C4B", ...btnstyle }}><img style={{ height: "max(30px, 5vh)" }} src="/Images/co2.png" alt="" />Carbon Dioxide Levels</div>
                <div style={{ "--customcolor": "#2EAF7D", ...btnstyle }}><img style={{ height: "max(30px, 5vh)" }} src="/Images/temp.png" alt="" />Temperature Rise</div>
            </div>

            <div className="graph-user-interaction">
                <div className="graph-inputs">
                    <div className="graph-input-box">
                        <label>Base Year</label>
                        <input type="number" id="num1" placeholder="1960" />
                    </div>
                    <div className="graph-input-box">
                        <label>Final Year</label>
                        <input type="number" id="num2" placeholder="2022" />
                    </div>
                </div>
                <button onClick={handleChange}>Submit</button>
            </div>

            <p className="graph-increased">Between the years {document.getElementById("num1")?.value || 1960} - {document.getElementById("num2")?.value || 2022} the average Carbon Dioxide levels in the atmosphere have increased by <strong>{carbonIncrease}</strong></p>
            <p className="graph-increased">Between the years {document.getElementById("num1")?.value || 1960} - {document.getElementById("num2")?.value || 2022} the Average Temperature has increased by <strong>{tempIncrease}</strong></p>
        </section>
    )
}

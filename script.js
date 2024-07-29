let params = {
    currentScene: 0,
    totalScenes: 4,
    currentYearFilter: '2010', 
    availableYears: [], 
    selectedContinent: null 
};

const countryToContinent = {
    "Aruba": "North America",
    "Africa Eastern and Southern": "Africa",
    "Afghanistan": "Asia",
    "Africa Western and Central": "Africa",
    "Angola": "Africa",
    "Albania": "Europe",
    "Andorra": "Europe",
    "Arab World": "Asia",
    "United Arab Emirates": "Asia",
    "Argentina": "South America",
    "Armenia": "Asia",
    "American Samoa": "Oceania",
    "Antigua and Barbuda": "North America",
    "Australia": "Oceania",
    "Austria": "Europe",
    "Azerbaijan": "Asia",
    "Burundi": "Africa",
    "Belgium": "Europe",
    "Benin": "Africa",
    "Burkina Faso": "Africa",
    "Bangladesh": "Asia",
    "Bulgaria": "Europe",
    "Bahrain": "Asia",
    "Bahamas, The": "North America",
    "Bosnia and Herzegovina": "Europe",
    "Belarus": "Europe",
    "Belize": "North America",
    "Bermuda": "North America",
    "Bolivia": "South America",
    "Brazil": "South America",
    "Barbados": "North America",
    "Brunei Darussalam": "Asia",
    "Bhutan": "Asia",
    "Botswana": "Africa",
    "Central African Republic": "Africa",
    "Canada": "North America",
    "Central Europe and the Baltics": "Europe",
    "Switzerland": "Europe",
    "Channel Islands": "Europe",
    "Chile": "South America",
    "China": "Asia",
    "Cote d'Ivoire": "Africa",
    "Cameroon": "Africa",
    "Congo, Dem. Rep.": "Africa",
    "Congo, Rep.": "Africa",
    "Colombia": "South America",
    "Comoros": "Africa",
    "Cabo Verde": "Africa",
    "Costa Rica": "North America",
    "Caribbean small states": "North America",
    "Cuba": "North America",
    "Curacao": "North America",
    "Cayman Islands": "North America",
    "Cyprus": "Asia",
    "Czechia": "Europe",
    "Germany": "Europe",
    "Djibouti": "Africa",
    "Dominica": "North America",
    "Denmark": "Europe",
    "Dominican Republic": "North America",
    "Algeria": "Africa",
    "East Asia & Pacific (excluding high income)": "Asia",
    "Early-demographic dividend": "Asia",
    "East Asia & Pacific": "Asia",
    "Europe & Central Asia (excluding high income)": "Europe",
    "Europe & Central Asia": "Europe",
    "Ecuador": "South America",
    "Egypt, Arab Rep.": "Africa",
    "Euro area": "Europe",
    "Eritrea": "Africa",
    "Spain": "Europe",
    "Estonia": "Europe",
    "Ethiopia": "Africa",
    "European Union": "Europe",
    "Fragile and conflict affected situations": "Africa",
    "Finland": "Europe",
    "Fiji": "Oceania",
    "France": "Europe",
    "Faroe Islands": "Europe",
    "Micronesia, Fed. Sts.": "Oceania",
    "Gabon": "Africa",
    "United Kingdom": "Europe",
    "Georgia": "Asia",
    "Ghana": "Africa",
    "Gibraltar": "Europe",
    "Guinea": "Africa",
    "Gambia, The": "Africa",
    "Guinea-Bissau": "Africa",
    "Equatorial Guinea": "Africa",
    "Greece": "Europe",
    "Grenada": "North America",
    "Greenland": "North America",
    "Guatemala": "North America",
    "Guam": "Oceania",
    "Guyana": "South America",
    "High income": "Europe",
    "Hong Kong SAR, China": "Asia",
    "Honduras": "North America",
    "Heavily indebted poor countries (HIPC)": "Africa",
    "Croatia": "Europe",
    "Haiti": "North America",
    "Hungary": "Europe",
    "IBRD only": "Europe",
    "IDA & IBRD total": "Africa",
    "IDA total": "Africa",
    "IDA blend": "Africa",
    "Indonesia": "Asia",
    "IDA only": "Africa",
    "Isle of Man": "Europe",
    "India": "Asia",
    "Not classified": "Asia",
    "Ireland": "Europe",
    "Iran, Islamic Rep.": "Asia",
    "Iraq": "Asia",
    "Iceland": "Europe",
    "Israel": "Asia",
    "Italy": "Europe",
    "Jamaica": "North America",
    "Jordan": "Asia",
    "Japan": "Asia",
    "Kazakhstan": "Asia",
    "Kenya": "Africa",
    "Kyrgyz Republic": "Asia",
    "Cambodia": "Asia",
    "Kiribati": "Oceania",
    "St. Kitts and Nevis": "North America",
    "Korea, Rep.": "Asia",
    "Kuwait": "Asia",
    "Latin America & Caribbean (excluding high income)": "South America",
    "Lao PDR": "Asia",
    "Lebanon": "Asia",
    "Liberia": "Africa",
    "Libya": "Africa",
    "St. Lucia": "North America",
    "Latin America & Caribbean": "South America",
    "Least developed countries: UN classification": "Africa",
    "Low income": "Africa",
    "Liechtenstein": "Europe",
    "Sri Lanka": "Asia",
    "Lower middle income": "Asia",
    "Low & middle income": "Africa",
    "Lesotho": "Africa",
    "Late-demographic dividend": "Asia",
    "Lithuania": "Europe",
    "Luxembourg": "Europe",
    "Latvia": "Europe",
    "Macao SAR, China": "Asia",
    "St. Martin (French part)": "North America",
    "Morocco": "Africa",
    "Monaco": "Europe",
    "Moldova": "Europe",
    "Madagascar": "Africa",
    "Maldives": "Asia",
    "Middle East & North Africa": "Asia",
    "Mexico": "North America",
    "Marshall Islands": "Oceania",
    "Middle income": "Asia",
    "North Macedonia": "Europe",
    "Mali": "Africa",
    "Malta": "Europe",
    "Myanmar": "Asia",
    "Middle East & North Africa (excluding high income)": "Asia",
    "Montenegro": "Europe",
    "Mongolia": "Asia",
    "Northern Mariana Islands": "Oceania",
    "Mozambique": "Africa",
    "Mauritania": "Africa",
    "Mauritius": "Africa",
    "Malawi": "Africa",
    "Malaysia": "Asia",
    "North America": "North America",
    "Namibia": "Africa",
    "New Caledonia": "Oceania",
    "Niger": "Africa",
    "Nigeria": "Africa",
    "Nicaragua": "North America",
    "Netherlands": "Europe",
    "Norway": "Europe",
    "Nepal": "Asia",
    "Nauru": "Oceania",
    "New Zealand": "Oceania",
    "OECD members": "Europe",
    "Oman": "Asia",
    "Other small states": "Asia",
    "Pakistan": "Asia",
    "Panama": "North America",
    "Peru": "South America",
    "Philippines": "Asia",
    "Palau": "Oceania",
    "Papua New Guinea": "Oceania",
    "Poland": "Europe",
    "Pre-demographic dividend": "Africa",
    "Puerto Rico": "North America",
    "Korea, Dem. People's Rep.": "Asia",
    "Portugal": "Europe",
    "Paraguay": "South America",
    "West Bank and Gaza": "Asia",
    "Pacific island small states": "Oceania",
    "Post-demographic dividend": "Europe",
    "French Polynesia": "Oceania",
    "Qatar": "Asia",
    "Romania": "Europe",
    "Russian Federation": "Europe",
    "Rwanda": "Africa",
    "South Asia": "Asia",
    "Saudi Arabia": "Asia",
    "Sudan": "Africa",
    "Senegal": "Africa",
    "Singapore": "Asia",
    "Solomon Islands": "Oceania",
    "Sierra Leone": "Africa",
    "El Salvador": "North America",
    "San Marino": "Europe",
    "Somalia": "Africa",
    "Serbia": "Europe",
    "Sub-Saharan Africa (excluding high income)": "Africa",
    "South Sudan": "Africa",
    "Sub-Saharan Africa": "Africa",
    "Small states": "Asia",
    "Sao Tome and Principe": "Africa",
    "Suriname": "South America",
    "Slovak Republic": "Europe",
    "Slovenia": "Europe",
    "Sweden": "Europe",
    "Eswatini": "Africa",
    "Sint Maarten (Dutch part)": "North America",
    "Seychelles": "Africa",
    "Syrian Arab Republic": "Asia",
    "Turks and Caicos Islands": "North America",
    "Chad": "Africa",
    "East Asia & Pacific (IDA & IBRD countries)": "Asia",
    "Europe & Central Asia (IDA & IBRD countries)": "Europe",
    "Togo": "Africa",
    "Thailand": "Asia",
    "Tajikistan": "Asia",
    "Turkmenistan": "Asia",
    "Latin America & the Caribbean (IDA & IBRD countries)": "South America",
    "Timor-Leste": "Asia",
    "Middle East & North Africa (IDA & IBRD countries)": "Asia",
    "Tonga": "Oceania",
    "South Asia (IDA & IBRD)": "Asia",
    "Sub-Saharan Africa (IDA & IBRD countries)": "Africa",
    "Trinidad and Tobago": "North America",
    "Tunisia": "Africa",
    "Turkiye": "Asia",
    "Tuvalu": "Oceania",
    "Tanzania": "Africa",
    "Uganda": "Africa",
    "Ukraine": "Europe",
    "Upper middle income": "Europe",
    "Uruguay": "South America",
    "United States": "North America",
    "Uzbekistan": "Asia",
    "St. Vincent and the Grenadines": "North America",
    "Venezuela, RB": "South America",
    "British Virgin Islands": "North America",
    "Virgin Islands (U.S.)": "North America",
    "Viet Nam": "Asia",
    "Vanuatu": "Oceania",
    "World": "Asia",
    "Samoa": "Oceania",
    "Kosovo": "Europe",
    "Yemen, Rep.": "Asia",
    "South Africa": "Africa",
    "Zambia": "Africa",
    "Zimbabwe": "Africa"
};

const continentColors = {
    "North America": "red",
    "South America": "green",
    "Asia": "blue",
    "Europe": "purple",
    "Africa": "orange",
    "Oceania": "cyan",
    "Other": "gray" 
};

function getContinentColor(country) {
    const continent = countryToContinent[country] || "Other";
    return continentColors[continent];
}

let mergedData;
let x, y, r; 

function getContinentColor(country) {
    const continent = countryToContinent[country] || "Other";
    return continentColors[continent];
}

function setupScenes() {
    d3.select("#intro").classed("active", true);
    d3.selectAll(".scene").classed("active", false);

    d3.select("#scene-1")
        .append("h2")

    d3.select("#scene-2")
        .append("h2")

    d3.select("#scene-3")
        .append("h2")
}

function showScene(sceneNumber) {
    d3.selectAll(".scene").classed("active", false);

    if (sceneNumber === 0) {
        d3.select("#intro").classed("active", true);
    } else {
        d3.select(`#scene-${sceneNumber}`).classed("active", true);
        if (sceneNumber === 1) {
            drawScene1();
        } else if (sceneNumber === 2) {
            drawScene2();
        } else if (sceneNumber === 3) {
            drawScene3("United States");
        }
    }
}

function drawScene1() {
    const margin = { top: 20, right: 20, bottom: 150, left: 80 },
        width = 1400 - margin.left - margin.right,
        height = 900 - margin.top - margin.bottom;

    d3.select("#scene-1-content").selectAll("*").remove();

    const svg = d3.select("#scene-1-content").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    
    let filteredMergedData = filterDataByYear(mergedData, params.currentYearFilter);
    console.log("nmergelen", filteredMergedData.length);

    x = d3.scaleLinear().domain([0, d3.max(mergedData, d => d.Renewable)]).range([0, width]);
    y = d3.scaleLinear().domain([0, d3.max(mergedData, d => d.CO2)]).range([height, 0]);
    r = d3.scaleSqrt().domain([0, d3.max(mergedData, d => d.GDP)]).range([0, 20]);

    drawAxes(svg);
    updateChart(filteredMergedData, svg);
    drawLegend(svg);

    // Update year slider
    const yearSlider = document.getElementById("year-slider");
    const yearDisplay = document.getElementById("year-display");

    yearSlider.min = d3.min(params.availableYears);
    yearSlider.max = d3.max(params.availableYears);
    yearSlider.value = params.currentYearFilter;
    yearDisplay.innerText = params.currentYearFilter;  
}

function drawScene2() {
    const margin = { top: 20, right: 20, bottom: 150, left: 80 },
        width = 1300 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom;

    d3.select("#scene-2-content").selectAll("*").remove();

    const svgContainer = d3.select("#scene-2-content")
        .style("position", "relative");

    const svg = svgContainer
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const tooltip = d3.select("#scene-2-content")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("pointer-events", "none");
    
    svg.append("text")
        .attr("class", "scene2-tip")
        .attr("x", (width + margin.left + margin.right) / 2)
        .attr("y", 10)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "orange")  
        .style("font-weight", "bold")  
        .text("Tip: Hover over datapoints/legend to see more information");

    Promise.all([
        d3.csv("ESGCSV.csv"),
        d3.csv("GDPdata2.csv")
    ]).then(([esgData, gdpData]) => {
        const energyUseData = esgData.filter(d => d['Indicator Code'] === 'EG.USE.PCAP.KG.OE');
        const gdpPerCapitaData = gdpData.filter(d => d['Indicator Code'] === 'NY.GDP.PCAP.CD');

        const processData = data =>
            data.flatMap(d =>
                Object.keys(d)
                    .filter(key => !isNaN(key) && +key >= 2000 && +key <= 2020)
                    .map(year => ({
                        Country: d['Country Name'],
                        Year: year,
                        Value: +d[year]
                    }))
                    .filter(d => !isNaN(d.Value))
            );

        const energyProcessedData = processData(energyUseData);
        const gdpProcessedData = processData(gdpPerCapitaData);

        let mergedData = energyProcessedData.map(d => {
            const gdp = gdpProcessedData.find(g => g.Country === d.Country && g.Year === d.Year);
            return {
                Country: d.Country,
                Year: d.Year,
                EnergyUse: d.Value,
                GDP: gdp ? gdp.Value : null
            };
        }).filter(d => d.GDP !== null && d.EnergyUse > 0);  

        const x = d3.scaleLinear()
            .domain([0, d3.max(mergedData, d => d.EnergyUse)])
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(mergedData, d => d.GDP)])
            .range([height, 0]);

        const xAxis = d3.axisBottom(x).tickFormat(d3.format(".2s"));
        const yAxis = d3.axisLeft(y).tickFormat(d3.format(".2s"));

        const xAxisGroup = g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis);

        const yAxisGroup = g.append("g")
            .attr("class", "y-axis")
            .call(yAxis);

        const circles = g.selectAll("circle")
            .data(mergedData)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.EnergyUse))
            .attr("cy", d => y(d.GDP))
            .attr("r", 5)
            .attr("fill", d => getContinentColor(d.Country))
            .on("mouseover", function(event, d) {
                const [mouseX, mouseY] = d3.pointer(event, svgContainer.node());
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(`
                    <strong>${d.Country}</strong><br/>
                    Year: ${d.Year}<br/>
                    Energy Use: ${d.EnergyUse.toFixed(2)} kg of oil equivalent per capita<br/>
                    GDP: $${d.GDP.toFixed(2)}
                `)
                    .style("left", (mouseX + 10) + "px")
                    .style("top", (mouseY - 10) + "px");
            })
            .on("mouseout", function() {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        svg.append("text")
            .attr("class", "x-axis-label")
            .attr("text-anchor", "middle")
            .attr("x", (width / 2) + margin.left)
            .attr("y", height + margin.top + margin.bottom - 100)
            .text("Energy Use (kg of oil equivalent per capita)");

        svg.append("text")
            .attr("class", "y-axis-label")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2 - margin.top)
            .attr("y", margin.left / 2 - 10)
            .text("GDP per Capita (current US$)");

        const latestYear = d3.max(mergedData, d => d.Year);
        const latestData = mergedData.filter(d => d.Year === latestYear && d.EnergyUse > 0);

        const topEfficiencyCountries = latestData
            .map(d => ({...d, efficiency: d.GDP / d.EnergyUse}))
            .sort((a, b) => b.efficiency - a.efficiency)
            .slice(0, 3);

        const annotations = topEfficiencyCountries.map((country, index) => ({
            note: {
                label: `GDP: $${country.GDP.toFixed(0)}, Energy Use: ${country.EnergyUse.toFixed(0)} kg oil equiv. (high GDP with low energy use)`,
                title: `${index + 1}. ${country.Country}`,
                wrap: 200
            },
            x: x(country.EnergyUse),
            y: y(country.GDP),
            dx: 800,
            dy: -100 + index * 80  
        }));

        function adjustCoordinates(x, y, dx, dy) {
            const margin = 10;
            let adjustedDx = dx;
            let adjustedDy = dy;
            
            if (x + adjustedDx < margin) adjustedDx = margin - x;
            if (x + adjustedDx > width - margin) adjustedDx = width - margin - x;
            if (y + adjustedDy < margin) adjustedDy = margin - y;
            if (y + adjustedDy > height - margin) adjustedDy = height - margin - y;
            
            return [adjustedDx, adjustedDy];
        }

        const adjustedAnnotations = annotations.map(annotation => {
            [annotation.dx, annotation.dy] = adjustCoordinates(annotation.x, annotation.y, annotation.dx, annotation.dy);
            return annotation;
        });

        const makeAnnotations = d3.annotation()
            .type(d3.annotationLabel)
            .annotations(adjustedAnnotations)
            .textWrap(200)
            .notePadding(15);

        svg.append("g")
            .attr("class", "annotation-group")
            .attr("transform", `translate(${margin.left},${margin.top})`)
            .call(makeAnnotations);

        const legend = d3.select("#scene-2-legend");
        legend.selectAll("*").remove();

        Object.keys(continentColors).forEach((continent, i) => {
            const color = continentColors[continent];
            legend.append("div")
                .style("display", "flex")
                .style("align-items", "center")
                .style("margin-bottom", "5px")
                .on("mouseover", function() {
                    circles.attr("opacity", d => countryToContinent[d.Country] === continent ? 1 : 0.1);
                })
                .on("mouseout", function() {
                    circles.attr("opacity", 1);
                })
                .html(`
                    <span style="background-color: ${color}; width: 20px; height: 20px; margin-right: 10px; display: inline-block;"></span>
                    <span>${continent}</span>
                `);
        });
    });
}


function drawScene3(country = "United States") {
    const margin = { top: 20, right: 80, bottom: 50, left: 80 },
        width = 1300 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom;

    d3.select("#scene-3-content").selectAll("*").remove();

    const svg = d3.select("#scene-3-content").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    Promise.all([
        d3.csv("ESGCSV.csv"),
        d3.csv("GDPdata2.csv")
    ]).then(([esgData, gdpData]) => {
        const energyIntensityData = esgData.filter(d => d['Indicator Code'] === 'EG.EGY.PRIM.PP.KD');
        const gdpPerCapitaData = gdpData.filter(d => d['Indicator Code'] === 'NY.GDP.PCAP.CD');

        const processData = (data) =>
            data.flatMap(d =>
                Object.keys(d)
                    .filter(key => !isNaN(key) && +key >= 2000 && +key <= 2020)
                    .map(year => ({
                        Country: d['Country Name'],
                        Year: +year,
                        Value: +d[year]
                    }))
                    .filter(d => !isNaN(d.Value))
            );

        const energyIntensityProcessed = processData(energyIntensityData);
        const gdpPerCapitaProcessed = processData(gdpPerCapitaData);

        const countryEnergyIntensityData = energyIntensityProcessed.filter(d => d.Country === country);
        const countryGDPData = gdpPerCapitaProcessed.filter(d => d.Country === country);

        const x = d3.scaleLinear()
            .domain([2000, 2020])
            .range([0, width]);

        const yLeft = d3.scaleLinear()
            .domain([0, d3.max(countryEnergyIntensityData, d => d.Value)])
            .range([height, 0]);

        const yRight = d3.scaleLinear()
            .domain([0, d3.max(countryGDPData, d => d.Value)])
            .range([height, 0]);

        const lineEnergy = d3.line()
            .x(d => x(d.Year))
            .y(d => yLeft(d.Value));

        const lineGDP = d3.line()
            .x(d => x(d.Year))
            .y(d => yRight(d.Value));

        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.format("d")));

        svg.append("g")
            .call(d3.axisLeft(yLeft));

        svg.append("g")
            .attr("transform", `translate(${width},0)`)
            .call(d3.axisRight(yRight));

        svg.append("path")
            .datum(countryEnergyIntensityData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("d", lineEnergy);

        svg.append("path")
            .datum(countryGDPData)
            .attr("fill", "none")
            .attr("stroke", "orange")
            .attr("stroke-width", 2)
            .attr("d", lineGDP);

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height + margin.bottom - 10)
            .text("Year");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 20)
            .attr("x", -height / 2)
            .text("Energy intensity level (MJ/$2017 PPP GDP)");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(90)")
            .attr("y", -width - margin.right + 20)
            .attr("x", height / 2)
            .text("GDP per capita (current US$)");

        const legend = svg.append("g")
            .attr("transform", `translate(${width / 2}, 30)`);

        legend.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 6).style("fill", "steelblue");
        legend.append("circle").attr("cx", 0).attr("cy", 30).attr("r", 6).style("fill", "orange");
        legend.append("text").attr("x", 20).attr("y", 0).text("Energy Intensity").style("font-size", "15px").attr("alignment-baseline", "middle");
        legend.append("text").attr("x", 20).attr("y", 30).text("GDP per Capita").style("font-size", "15px").attr("alignment-baseline", "middle");
    });
}


function populateCountrySelector(data) {
    const countries = [...new Set(data.map(d => d.Country))].sort();
    const selector = document.getElementById("country-selector");
    
    countries.forEach(country => {
        if (country !== "United States") {  
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            selector.appendChild(option);
        }
    });
}

function updateScene() {
    d3.selectAll(".scene").style("display", "none");
    d3.select(`#scene-${params.currentScene + 1}`).style("display", "block");
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        params.currentScene = (params.currentScene + 1) % params.totalScenes;
        updateScene();
    } else if (event.key === "ArrowLeft") {
        params.currentScene = (params.currentScene - 1 + params.totalScenes) % params.totalScenes;
        updateScene();
    }
});


function drawAxes(svg) {
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0,750)")
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("class", "x-label")
        .attr("x", 750)
        .attr("y", 800)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text("Renewable Energy Consumption (% of total final energy consumption)");

    svg.append("text")
        .attr("class", "y-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -375)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text("CO2 Emissions (metric tons per capita)");

    svg.append("text")
        .attr("class", "chart-title")
        .attr("x", 750)
        .attr("y", 30)
        .attr("text-anchor", "middle")
        .style("font-size", "22px");

    svg.append("text")
        .attr("class", "chart-tooltip")
        .attr("x", 750)
        .attr("y", 50)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("fill", "orange")
        .text("Tip 1: Hover over the data points to get additional information. Tip 2: Hover over the legend items to filter by continent.");
}


function updateChart(data, svg) {
    console.log("Updating chart with data length:", data.length);

    const circles = svg.selectAll("circle")
        .data(data, d => d.Country);

    circles.enter()
        .append("circle")
        .merge(circles)
        .transition()
        .duration(500)
        .attr("cx", d => x(d.Renewable))
        .attr("cy", d => y(d.CO2))
        .attr("r", d => r(d.GDP))
        .attr("fill", d => getContinentColor(d.Country));

    circles.exit().remove();

    svg.selectAll("circle")
        .on("mouseover", function(event, d) {
            const tooltip = d3.select("#tooltip");
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`
                <strong>${d.Country}</strong><br/>
                Year: ${d.Year}<br/>
                CO2: ${d.CO2.toFixed(2)} metric tons per capita<br/>
                GDP: $${d.GDP.toFixed(2)}<br/>
                Renewable Energy: ${d.Renewable.toFixed(2)}%
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select("#tooltip").transition()
                .duration(500)
                .style("opacity", 0);
        });

    svg.select(".chart-title")
        .text(`CO2 Emissions vs. Renewable Energy Consumption (${params.currentYearFilter})`);

    addAnnotations(svg, data);
}

function addAnnotations(svg, data) {
    const sortedData = data.sort((a, b) => b.GDP - a.GDP);
    const topThree = sortedData.slice(0, 3); // Get top 3 GDP countries

    const annotationsData = topThree.map((d, i) => {
        let dx, dy;
        if (i === 0) {
            // First place: longer line
            dx = 250;
            dy = -250;
        } else {
            // Second and third place: standard length
            dx = 100;
            dy = -100 - (i * 50);
        }

        return {
            note: {
                label: `CO2: ${d.CO2.toFixed(2)}, GDP: ${d.GDP.toFixed(2)}, Renewable: ${d.Renewable.toFixed(2)}%`,
                title: `${i + 1}. ${d.Country} (Highest GDP)`
            },
            x: x(d.Renewable),
            y: y(d.CO2),
            dx: dx,
            dy: dy
        };
    });

    svg.selectAll('.annotation-group').remove();

    const makeAnnotations = d3.annotation()
        .type(d3.annotationLabel)
        .annotations(annotationsData);

    svg.append("g")
        .attr("class", "annotation-group")
        .call(makeAnnotations);
}

function filterDataByYear(data, year) {
    console.log("Filtering data for year:", year);
    return data.filter(d => d.Year == year);
}

function goToNextYear() {
    const currentIndex = params.availableYears.indexOf(params.currentYearFilter);
    const nextIndex = (currentIndex + 1) % params.availableYears.length;
    params.currentYearFilter = params.availableYears[nextIndex];
    updateYearDisplay();
    const filteredData = filterDataByYear(mergedData, params.currentYearFilter);
    updateChart(filteredData, d3.select("#scene-1 svg g"), d3.select(".tooltip"));
}

function goToPreviousYear() {
    const currentIndex = params.availableYears.indexOf(params.currentYearFilter);
    const previousIndex = (currentIndex - 1 + params.availableYears.length) % params.availableYears.length;
    params.currentYearFilter = params.availableYears[previousIndex];
    updateYearDisplay();
    const filteredData = filterDataByYear(mergedData, params.currentYearFilter);
    updateChart(filteredData, d3.select("#scene-1 svg g"), d3.select(".tooltip"));
}

function updateYearDisplay() {
    document.getElementById("year-slider").value = params.currentYearFilter;
    document.getElementById("year-display").innerText = params.currentYearFilter;
}

function drawLegend(svg, tooltip) {
    const legend = d3.select("#legend");
    legend.selectAll("*").remove();

    Object.keys(continentColors).forEach(continent => {
        const color = continentColors[continent];
        legend.append("div")
            .style("display", "flex")
            .style("align-items", "center")
            .on("mouseover", function() {
                params.selectedContinent = continent;
                const filteredData = filterDataByYear(mergedData.filter(d => countryToContinent[d.Country] === continent), params.currentYearFilter);
                updateChart(filteredData, svg, tooltip);
            })
            .on("mouseout", function() {
                params.selectedContinent = null;
                const filteredMergedData = filterDataByYear(mergedData, params.currentYearFilter);
                updateChart(filteredMergedData, svg, tooltip);
            })
            .html(`<span style="background-color: ${color}; width: 20px; height: 20px; margin-right: 10px;"></span>${continent}`);
    });
}


d3.select("#next-year").on("click", goToNextYear);
d3.select("#previous-year").on("click", goToPreviousYear);

const yearSlider = document.getElementById("year-slider");
const yearDisplay = document.getElementById("year-display");

yearSlider.addEventListener("input", function() {
    params.currentYearFilter = this.value;
    yearDisplay.innerText = params.currentYearFilter;
    const filteredData = filterDataByYear(mergedData, params.currentYearFilter);
    updateChart(filteredData, d3.select("#scene-1-content svg g"));
});

Promise.all([
    d3.csv("ESGCSV.csv"),
    d3.csv("GDPdata2.csv")
]).then(([esgData, gdpData]) => {
    const co2Data = esgData.filter(d => d['Indicator Code'] === 'EN.ATM.CO2E.PC');
    const renewableData = esgData.filter(d => d['Indicator Code'] === 'EG.FEC.RNEW.ZS');
    const energyIntensityData = esgData.filter(d => d['Indicator Code'] === 'EG.EGY.PRIM.PP.KD');
    const gdpPerCapitaData = gdpData.filter(d => d['Indicator Code'] === 'NY.GDP.PCAP.CD');

    const processData = (data) =>
        data.flatMap(d =>
            Object.keys(d)
                .filter(key => !isNaN(key) && +key >= 2000 && +key <= 2020)
                .map(year => ({
                    Country: d['Country Name'],
                    Year: +year,
                    Value: +d[year]
                }))
                .filter(d => !isNaN(d.Value))
        );

    const co2ProcessedData = processData(co2Data);
    const renewableProcessedData = processData(renewableData);
    const energyIntensityProcessed = processData(energyIntensityData);
    const gdpProcessedData = processData(gdpPerCapitaData);

    mergedData = co2ProcessedData.map(d => {
        const gdp = gdpProcessedData.find(g => g.Country === d.Country && g.Year === d.Year);
        const renewable = renewableProcessedData.find(r => r.Country === d.Country && r.Year === d.Year);
        const energyIntensity = energyIntensityProcessed.find(e => e.Country === d.Country && e.Year === d.Year);
        return { 
            Country: d.Country, 
            Year: d.Year, 
            CO2: d.Value, 
            GDP: gdp ? gdp.Value : null, 
            Renewable: renewable ? renewable.Value : null,
            EnergyIntensity: energyIntensity ? energyIntensity.Value : null
        };
    }).filter(d => d.GDP !== null && d.Renewable !== null && d.EnergyIntensity !== null);

    params.availableYears = [...new Set(mergedData.map(d => d.Year))].sort();
    
    setupScenes();
    showScene(0);  

    yearSlider.setAttribute("min", params.availableYears[0]);
    yearSlider.setAttribute("max", params.availableYears[params.availableYears.length - 1]);
    yearSlider.setAttribute("value", params.currentYearFilter);
    yearDisplay.innerText = params.currentYearFilter;

    populateCountrySelector(mergedData);

    document.getElementById("country-selector").addEventListener("change", function() {
        drawScene3(this.value);
    });

    console.log("Data loaded and processed. Available years:", params.availableYears);
}).catch(error => {
    console.error("Error loading or processing data:", error);
});
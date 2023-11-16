// Plotly Script
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var data = [
    {
        x: months,
        y: [0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0],
        type: 'scatter',  // 'scatter' for lines
        mode: 'lines',
        name: 'Hover on graph to view values',
        marker: {
            color: 'rgba(1,1,1, 0)'  //bar color
        }
        
    },
    {
        x: months,
        y: [28.18, 28.61, 28.88, 28.29, 28.28, 27.11, 26.81, 26.65, 26.64, 28.5, 28.49, 27.61],
        type: 'scatter',  // 'scatter' for lines
        mode: 'lines',
        name: 'Minimum Temperature',
        marker: {
            color: 'rgb(234,67,53)'  // bar color
        }
        
    },
    {
        x: months,
        y: [47.22, 48.52, 47.59, 44.44, 44.26, 42.78, 41.67, 42.41, 45.19, 45.74, 45, 45.74,],
        type: 'scatter',  // 'scatter' for lines
        mode: 'lines',
        name: 'Maximum Temperature'
    },
    {
        x: months,
        y: [7.68, 11.76, 44.92, 57.58, 40.1, 22.91, 28.94, 19.45, 10.55, 15.38, 25.02, 19.29],
        type: 'bar',  // 'bar' for bars
        name: 'Rainfall',
        marker: {
            color: 'rgb(31,120,209)'  // bar color
        }
    }
];

// Layout configuration
var layout = {
    title: {
    text: 'Turkana Monthly Mean Temperature and Rainfall Values',
    font: {
        size: 15,
        color: 'white'  
    }
    },
    xaxis: {
        title: 'Months',
        tickfont: {
            color: 'white'  // tick text color 
        }
    },
    yaxis: {
        title: 'Y-axis',
        tickfont: {
            color: 'white'  // tick text color
        }
    },
    plot_bgcolor: 'rgba(0,0,0,.0)',  // chart background color
    paper_bgcolor: 'rgba(0,0,0,.7)',  // background color (around the chart)
    legend: {
        x: 1,
        xanchor: 'left',
        y: 1,
        bgcolor: 'rgba(0,0,0,0)',  // legend background color to transparent
        bordercolor: 'white',  
        font: {
            color: 'white'  
        }
    }
};

// Plot Values
Plotly.newPlot('plotly-graph', data, layout);

/* -------------------------------------------------------- */

// CHART TWO

function getData() {
    // Generate an array values
    return Array.from({ length: 10 }, () => Math.random() * (48 - 27) + 27);
}

// Initial data
var initialData = {
y: getData(),
type: 'scatter',
mode: 'lines+markers',  // mode to include both lines and markers
fill: 'tozeroy',  // colors the area below the line
fillcolor: 'rgba(245,91,64, .5)',  
line: {
    dash: 'solid',  // line style to 'solid'
    width: 1 , 
    color:'rgb(245,91,64)'
}
};

var layout = {
title: {
    text: 'Humidity',
    font: {
        size: 20,
        color: 'white'  
    }
},
plot_bgcolor: 'rgba(0,0,0,.0)',  // Set the chart background color
    paper_bgcolor: 'rgba(0,0,0,.7)',  //  background color around the chart
    font: {
    color: 'white'  
}
};


Plotly.plot('chart', [initialData], layout);

setInterval(function () {
// Maps over the y values and updates the chart
Plotly.update('chart', { y: [getData().map(value => value)] }, {});
}, 3000);
Highcharts.chart('top-screen', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top Screen Used in Cronus'
    },
    xAxis: {
        categories: ['Query Builder', 'Query Executer', 'Model Switch', 'Model Inputs Config',
            'Risk Measure Live', 'Service User', 'Sec Analytics Override',
            'Credit Entity Attributes', 'Security Stale Nodes', 'Agency Model Map',
            'Stale Risk Measures'
        ],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Count of Screen Used is',
        data: [678, 345, 76, 876, 234, 987, 123, 90, 23, 678, 54]
    }]
});
Highcharts.chart('top-user', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top Users of Cronus'
    },
    xAxis: {
        categories: ['Sanjay Singh Bisht', 'Karamdeep Singh', 'Nikhil Aggarwal', 'Sanju'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'User Count is',
        data: [678, 345, 76, 876]
    }]
});
$(document).ready(function () {
    $('.date').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
    var width = $(window).width();
    if (width <= 768) {
        $('#basic-btn-1').DataTable({
            responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
            oLanguage: {
                sLengthMenu: " _MENU_ ",
                sSearch: "",
                sSearchPlaceholder: "Search",
            }
        });
    } else {
        $('#basic-btn-1').DataTable({
            responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
        });
    }
});
Highcharts.chart('line-charts', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Line'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [1, 2, 5, 6, 23, 45, 10, 15, 23, 86]
    }]
});
Highcharts.chart('line-charts-1', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Line'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [10, 20, 30, 40, 50, 45, 60, 65, 75, 86]
    }]
});
Highcharts.chart('line-charts-2', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Line'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [5, 23, 35, 46, 53, 65, 70, 85, 93, 106]
    }]
});
Highcharts.chart('spline-charts', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Spline'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [5, 23, 35, 46, 53, 65, 70, 85, 93, 106]
    }]
});
Highcharts.chart('spline-charts-1', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Spline'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [5, 23, 35, 46, 53, 65, 70, 85, 93, 106]
    }]
});
Highcharts.chart('spline-charts-2', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Spline'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [5, 23, 35, 46, 53, 65, 70, 85, 93, 106]
    }]
});
Highcharts.chart('spline-charts-3', {
    exporting: {
        enabled: false
    },
    chart: {
        type: 'line',
        zoomType: 'x'
    },
    title: {
        text: 'Spline'
    },
    xAxis: {
        categories: [],
        title: {
            text: "Tenour (Months)"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rate',
            align: 'middle'
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
        name: 'Month is: ',
        data: [5, 23, 35, 46, 53, 65, 70, 85, 93, 106]
    }]
});
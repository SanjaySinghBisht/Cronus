$(document).ready(function () {
    var dataObject = [
        ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
        ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
        ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
        ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
        ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
    ];

    var container = document.getElementById('users-grid');
    var hot = new Handsontable(container, {
        data: dataObject,
        autoColumnSize: false,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        stretchH: 'all',
        autoWrapRow: true,
        maxRows: 10,
        manualRowResize: true,
        manualColumnResize: true,
        rowHeaders: false,
        colHeaders: function (col) {
            switch (col) {
                case 0:
                    return "User ID";
                case 1:
                    return "Name";
                case 2:
                    return "Email ID";
            }
        },
        columns: [{
                data: 0,
                type: 'text'
            },
            {
                data: 1,
                type: 'text'
            },
            {
                data: 2,
                type: 'text'
            }
        ]
    });
    var width = $(window).width();
    if (width <= 768) {
        $('#basic-btn-1,#basic-btn-2').DataTable({
            responsive: true,
            "bLengthChange": false,
            "bPaginate": false,
            "scrollY": "400px",
            dom: 'Bfrtip',
            buttons: [],
            oLanguage: {
                sLengthMenu: " _MENU_ ",
                sSearch: "",
                sSearchPlaceholder: "Search",
            }
        });
        $('#basic-btn-5').DataTable({
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
        $('#basic-btn-1,#basic-btn-2').DataTable({
            "bLengthChange": false,
            "bPaginate": false,
            "scrollY": "400px",
            responsive: true,
        });
        $('#basic-btn-5').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
            responsive: true,
        });
    }
});
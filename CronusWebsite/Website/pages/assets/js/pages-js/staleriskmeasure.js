$(document).ready(function () {
    $('.date').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
    var width = $(window).width();
    if (width <= 768) {
        $('#basic-btn-1,#basic-btn-2,#basic-btn-3').DataTable({
            responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength', 'colvis'
            ],
            oLanguage: {
                sLengthMenu: " _MENU_ ",
                sSearch: "",
                sSearchPlaceholder: "Search",
            }
        });
    } else {
        $('#basic-btn-1,#basic-btn-2,#basic-btn-3').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength', 'colvis'
            ],
            responsive: false,
        });
    }
});
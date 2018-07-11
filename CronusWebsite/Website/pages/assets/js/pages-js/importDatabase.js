$(document).ready(function () {
    $(".fileinput").fileinput({
        showCaption: false,
        dropZoneEnabled: true
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
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
            responsive: false,
        });
    }
});
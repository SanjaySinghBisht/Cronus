$(document).ready(function() {
  $("#selectDatabase").select2({
    placeholder: "Select Database",
    allowClear: true
  });
  $("#selectDelimeter").select2({
    placeholder: "Select Delimeter",
    allowClear: true
  });
  $("#mode").select2({
    placeholder: "Mode",
    allowClear: true
  });
  $(".fileinput").fileinput({
    showCaption: false,
    dropZoneEnabled: true
  });

  var width = $(window).width();
  if (width <= 768) {
    $("#basic-btn-1").DataTable({
      responsive: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      oLanguage: {
        sLengthMenu: " _MENU_ ",
        sSearch: "",
        sSearchPlaceholder: "Search"
      }
    });
  } else {
    $("#basic-btn-1").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: false
    });
  }
});

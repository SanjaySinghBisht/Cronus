$(document).ready(function() {
  $(".date").bootstrapMaterialDatePicker({
    weekStart: 0,
    time: false
  });
  $("#database").select2({
    placeholder: "Database",
    allowClear: true
  });
  $("#rejected-requestId").select2({
    placeholder: "Rejected/Error Request ID",
    allowClear: true
  });
  $('input[type="radio"]').on("change", function() {
    if ($("#reRequest").is(":checked")) {
      $("#rejected-requestdd,#reason-comments").show();
      $("#summary-comments")
        .parent()
        .addClass("col-md-6")
        .removeClass("col-md-12");
    } else {
      $("#rejected-requestdd,#reason-comments").hide();
      $("#summary-comments")
        .parent()
        .addClass("col-md-12")
        .removeClass("col-md-6");
    }
  });
  var width = $(window).width();
  if (width <= 768) {
    $(".basic-btn-1").DataTable({
      destroy: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true,
      oLanguage: {
        sLengthMenu: " _MENU_ ",
        sSearch: "",
        sSearchPlaceholder: "Search"
      }
    });
  } else {
    $(".basic-btn-1").DataTable({
      destroy: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true
    });
  }
});

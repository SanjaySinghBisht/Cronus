$(document).ready(function() {
  var width = $(window).width();
  if (width <= 768) {
    $("#basic-btn-1,#basic-btn-2,#basic-btn-3").DataTable({
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
    $("#basic-btn-1,#basic-btn-2,#basic-btn-3").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true
    });
  }
  $(".date").bootstrapMaterialDatePicker({
    weekStart: 0,
    time: false
  });
  $("#request-impact-study").on("click", function() {
    if (
      $(this)
        .find("span")
        .text() == "Request Impact Study"
    ) {
      $(this).html(
        '<i class="icofont icofont-caret-left"></i><span>Back to Dashboard</span> '
      );
    } else {
      $(this).html(
        ' <span>Request Impact Study</span> <i class="icofont icofont-caret-right"></i> '
      );
    }
    $(".impact-study-details").toggle();
    $(".impact-study-form").toggle();
  });
});

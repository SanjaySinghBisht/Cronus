$(document).ready(function() {
  $(".date").bootstrapMaterialDatePicker({
    weekStart: 0,
    time: false
  });
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
  $(".popover-btn").popover({
    placement: "right",
    title: "Select the Applications",
    html: true,
    content: $(".popover-container").html()
  });
  $(".background-layout").css("min-height", $(document).height());
  $(document).on("click", ".popover-btn", function() {
    $(this).attr("disabled", true);
    $(".background-layout").show();
    $("body").css("overflow", "hidden");
  });
  $(document).on("click", "#saveBtn,#cancelBtn", function() {
    $(".popover-btn").attr("disabled", false);
    $(".background-layout").hide();
    $("body").css("overflow", "auto");
    $(".popover-btn").popover("hide");
  });
});

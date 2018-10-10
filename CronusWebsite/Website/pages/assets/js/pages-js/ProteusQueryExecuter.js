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
});

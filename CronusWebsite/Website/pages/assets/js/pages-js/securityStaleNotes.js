$(document).ready(function() {
  $('[data-toggle="popover"]').popover({
    trigger: "hover"
  });
  $(".date").bootstrapMaterialDatePicker({
    weekStart: 0,
    time: false
  });
});

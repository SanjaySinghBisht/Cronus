$(document).ready(function() {
  var html =
'<div class="row"><div class="col-md-4">\
<div class="select2-dd"></div>\
</div>\
<div class="col-md-6">\
<input tabindex="1" type="text" placeholder="Artifact/JIRA ID" class="form-control">\
<small class="form-text text-muted">Please provide space separated artifacts/JIRA for Impact Study\
</small>\
</div>\
<div class="col-md-2 text-right">\
<button class="btn btn-danger">\
<i class="icofont icofont-trash"></i>\
<span class="btn-text">Delete</span>\
</button>\
</div></div>';
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
      ~$(this).html(
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
  $("#add-artifact-jira").on("click", function() {
    $(".add-artifact-jira").append(html);
    $(".select2-dd").select2({
      placeholder: "Select",
      allowClear: true
    });
  });
  $(".add-artifact-jira button.btn-danger").on("click", function() {
    $(this).parent().parent().remove();
  });
});

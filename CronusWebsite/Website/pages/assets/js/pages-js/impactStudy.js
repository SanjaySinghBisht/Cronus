$(document).ready(function () {
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
      responsive: true
    });
  }
  $(".date").bootstrapMaterialDatePicker({
    weekStart: 0,
    time: false
  });
  $("#request-impact-study").on("click", function () {
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
  $("#add-artifact-jira").on("click", function () {
    $(".add-artifact-jira").append(html);
    $(".select2-dd").select2({
      placeholder: "Select",
      allowClear: true
    });
  });
  $(document).on('click', '.add-artifact-jira button.btn-danger', function () {
    debugger;
    $(this).parent().parent().remove();
  });
  $('#model-calibration').on("click", function () {
    debugger;
    if ($(this).prop("checked") == true) {
      $(".model-calibration-dd").show();
    }
    else {
      $(".model-calibration-dd").hide();
    }
  });
  $(".model-run-verification input[type='radio']").on("click", function () {
    var current_id = $(".model-run-verification input[type='radio']:checked").attr("data-attr-id");
    $(".model-run-dd .sections").hide();
    $(".model-run-dd div[id='"+current_id+"']").show();
   
});
$(".model-for-impact-study input[type='radio']").on("click", function () {
  var current_id1 = $(".model-for-impact-study input[type='radio']:checked").attr("data-attr-id");
  $(".model-for-impact-study-sections .sections").hide();
  $(".model-for-impact-study-sections div[id='"+current_id1+"']").show();
});
$('[data-toggle="popover"]').popover({
  trigger: "click"
});
var clients_table = $('#basic-btn-1').DataTable();
    $('#add-risk-measure').on( 'click', function () {
        clients_table.row.add( [ 'Fiona White'] ).draw();
    } );
     
    $('.deleteRow').on( 'click', function () {
        alert('test');
    });
});

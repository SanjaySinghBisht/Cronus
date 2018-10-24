$(document).ready(function() {
  /*Add tabs dynamically in Query Executer */
  $("#add-tab").on("click", function() {
    var count = $("ul.query-tabs").find("li").length + 1;
    $(".query-tabs")
      .find("li a")
      .removeClass("active");
    $(".query-tabs").append(
      "<li class='nav-item'><a class='nav-link active' data-toggle='tab' href='#tab" +
        count +
        "' role='tab' >Tab" +
        count +
        "</a></li>"
    );
    $(".tab-pane").removeClass("active");
    $(
      '<div class="tab-pane active" id="tab1" role="tabpanel">\
        <div class="row m-t-5">\
        <div class="col-lg-6 col-sm-12">\
        <div class="row">\
        <div class="col-sm-12 col-md-6 col-lg-4">\
        <label for="Database">Database</label>\
        <div tabindex="2" class="select2-dd"></div>\
        </div>\
        <div class="col-sm-12 col-md-6 col-lg-4 form-group">\
        <label for="Category">Category</label>\
        <input type="text" tabindex="3" class="form-control" placeholder="Category">\
        </div>\
        <div class="col-sm-12 col-md-6 col-lg-4 form-group">\
        <label for="Query Name">Query Name</label>\
        <input type="text" tabindex="4" class="form-control" placeholder="Query Name">\
        </div>\
        <div class="col-sm-12 col-md-6 col-lg-12 m-t-24 text-right">\
        <button class="btn btn-info">\
        <i class="icofont icofont-hand-up"></i>\
        <span>Save Query</span>\
        </button>\
        </div>\
        </div>\
        </div>\
        <div class="col-lg-6 col-sm-12">\
        <div class="form-group row">\
        <div class="col-sm-12">\
        <label for="Query">Query</label>\
        <a class="full-screen">\
        <i class="icofont icofont-resize ft-20"></i>\
        </a>\
        <textarea rows="2" cols="5" tabindex="5" class="form-control min-h-93 form-control-variant" placeholder="Enter your query. Use semicolon(;) as a separator for multiple queries"></textarea>\
        </div ></div > <div class="row"><div class="col-sm-12 form-group col-md-6"><input type="text" tabindex="6" class="form-control" placeholder="Expected rows effected eg 100"></div><div class="col-sm-12  col-md-6"><div tabindex="7" class="select2-dd"></div></div></div><div class="form-group row"><div class="col-sm-12 text-right">\
        <button type="button" class="btn btn-success">\
        <i class="icofont icofont-play-alt-2"></i>\
        <span class="btn-text">Execute</span>\
        </button>\
        <button type="button" class="btn btn-primary">\
        <i class="icofont icofont-play-alt-2"></i>\
        <span class="btn-text">Commit</span>\
        </button>\
        <button type="button" class="btn btn-danger">\
        <i class="icofont icofont-ui-reply"></i>\
        <span class="btn-text">Rollback</span>\
        </button>\
        </div></div></form></div></div>\
        <div class="row m-t-15"><div class="col-sm-12"><h5 class="output-header">Output<span class="rows-effected">Rows Effected: 234</span></h5></div><div class="col-md-12 m-t-15"><div><table style="width: 100%" id="basic-btn-' +
        count +
        '" class="basic-btn-1 table export-btn-table table-striped table-bordered"><thead><tr><th>SCREENID</th><th>CONTEXT</th><th>KEY</th><th>VALUE</th><th>DESCRIPTION</th><th>LAST_CHG_USER</th><th>LAST_CHG_DATE</th><th>ENVIRONMENT</th></tr></thead><tbody><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr><tr><td> Risk Measure Override </td><td>Analytic_Id_Mapping</td><td>_Duration</td><td>manual_duration</td><td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td><td>SVC_OP</td><td>26/12/2018 08:52:46</td><td>(Null)</td></tr></tbody></table></div></div></div></div>'
    ).insertAfter(".tabs-container > div.tab-pane:last-child");
    $(".select2-dd").select2({
      placeholder: "Select",
      allowClear: true
    });
    if (width <= 768) {
      $(".popover-btn").popover({
        placement: "bottom",
        title: "Please specify the Reason",
        html: true,
        content: $(".popover-container").html()
      });
    } else {
      $(".popover-btn").popover({
        placement: "right",
        title: "Please specify the Reason",
        html: true,
        content: $(".popover-container").html()
      });
    }
    $(".basic-btn-1").DataTable({
      destroy: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true
    });
  });
  /*Add tabs dynamically in Query Executer */
  $(".background-layout").css("min-height", $(document).height());
  $(document).on("click", ".popover-btn", function() {
    $(this).attr("disabled", true);
    $(".background-layout").show();
    $("body").css("overflow", "hidden");
  });
  $(document).on("click", "#saveBtn,#cancelBtn", function() {
    let test = $(".popover #about").val();
    if ($(".popover #about").val() == "") {
      $(".popover-btn").prop("disabled", false);
      $(".popover-btn").prop("checked", false);
      $(".background-layout").hide();
      $("body").css("overflow", "auto");
      $(".popover-btn").popover("hide");
    } else {
      $(".popover-btn").prop("disabled", false);
      $(".background-layout").hide();
      $("body").css("overflow", "auto");
      $(".popover-btn").popover("hide");
    }
  });
  var width = $(window).width();
  if (width <= 768) {
    $(".basic-btn-1").DataTable({
      destroy: true,
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
    $(".basic-btn-1").DataTable({
      destroy: true,
      responsive: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"]
    });
  }
  if (width <= 768) {
    $(".popover-btn").popover({
      placement: "bottom",
      title: "Please specify the Reason",
      html: true,
      content: $(".popover-container").html()
    });
  } else {
    $(".popover-btn").popover({
      placement: "right",
      title: "Please specify the Reason",
      html: true,
      content: $(".popover-container").html()
    });
  }
  $(".select2-dd").select2({
    placeholder: "Select Value",
    allowClear: true
  });
  $("#countdown")
    .countdown360({
      radius: 60,
      seconds: 100,
      fontColor: "#FFFFFF",
      autostart: false,
      onComplete: function() {
        console.log("done");
      }
    })
    .start();
 
// Build the chart
Highcharts.chart('top-query', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Browser market shares in January, 2018',
      fontSize:'13px'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Other',
          y: 7.05
      }]
  }]
});
});

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
      ' <div class="tab-pane active" id="tab' +
        count +
        '" role="tabpanel">\
  <div class="row">\
  <div class="col-md-12">\
  <h4 class="section-heading">Jira Details</h4>\
  </div>\
  </div>\
  <div class="row">\
  <div class="col-md-12">\
  <form class="jira-details" action="#!">\
  <div class="row">\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <div class="input-group input-group-button">\
  <input type="text" tabindex="1" class="form-control jiraId" placeholder="Jira ID">\
  <span class="input-group-addon" id="basic-addon10">\
  <button class="btn btn-primary">\
  <i class="icofont icofont-search-alt-1"></i>\
  <span class="btn-text">Search</span>\
  </button>\
  </span>\
  </div>\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <input type="text" tabindex="2" class="form-control" placeholder="Summary">\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label class="l-h-34"><strong>Jira Status:</strong> <span>InProgress</span></label>\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label class="l-h-34">\
  <strong>Beta Execution Status:</strong> <span>Done</span>\
  </label>\
  </div>\
  </div>\
  <div class="row">\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label for="Request Type">Request Type</label>\
  <div tabindex="4" class="select2-dd"></div>\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label for="Group Responsible">Group Responsible</label>\
  <div tabindex="5" class="select2-dd"></div>\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label for="Team Responsible">Team Responsible</label>\
  <div tabindex="3" class="select2-dd"></div>\
  </div>\
  <div class="col-md-6 col-lg-3 col-sm-12">\
  <label for="Approver">Approver</label>\
  <div tabindex="6" class="select2-dd"></div>\
  </div>\
  </div>\
  <div class="row text-right">\
  <div class="col-md-12">\
  <button type="button" tabindex="7"  class="btn btn-warning">\
  <i class="icofont icofont-refresh"></i>\
  <span class="btn-text">Reset</span>\
  </button>\
  <button type="button" tabindex="8"  class="btn btn-info">\
  <i class="icofont icofont-edit"></i>\
  <span class="btn-text">Edit</span>\
  </button>\
  <button type="button" tabindex="9"  class="btn btn-success">\
  <i class="icofont icofont-hand-up"></i>\
  <span class="btn-text">Save</span>\
  </button>\
  <button type="button"  tabindex="10"  id="createJira" class="btn btn-primary">\
  <i class="icofont icofont-hand-up"></i>\
  <span class="btn-text">Create JIRA Ticket</span>\
  </button>\
  </div>\
  </div>\
  </form>\
  </div>\
  </div>\
  <div class="row m-t-15">\
  <div class="col-sm-12">\
  <form action="#!">\
  <div class="row">\
  <div class="col-sm-12 col-md-6">\
  <div class="row">\
  <div class="col-md-6 col-lg-3">\
  <label>Skip Beta Execution</label>\
  </div>\
  <div class="col-md-6 col-lg-3">\
  <div class="form-radio inline-block">\
  <form>\
  <div class="radio radio-inline">\
  <label>\
  <input class="popover-btn" tabindex="11" type="radio" name="radio">\
  <i class="helper"></i>Yes\
  </label>\
  </div>\
  <div class="hidden popover-container">\
  <form action="#!" id="popForm" method="get">\
  <div>\
  <textarea rows="8" name="about" id="about" class="form-control input-md"></textarea>\
  <button type="button" id="saveBtn" class="btn m-t-5 btn-primary">\
  <i class="icofont icofont-check"></i> Save</button>\
  <button type="button" id="cancelBtn" class="btn m-t-5 btn-danger">\
  <i class="icofont icofont-close"></i> Cancel</button>\
  </div>\
  </form>\
  </div>\
  <div class="radio radio-inline">\
  <label>\
  <input type="radio" tabindex="12" name="radio">\
  <i class="helper"></i>No\
  </label>\
  </div>\
  </form>\
  </div>\
  </div>\
  </div>\
  </div>\
  </div>\
  <div class="row">\
  <div class="col-sm-12 col-md-3 form-group">\
  <label for="reason">Reason</label>\
  <input type="text" id="reason" value="test" tabindex="1" class="form-control" placeholder="Reason">\
  </div>\
  <div class="col-sm-12 col-md-3">\
  <label for="Database">Database</label>\
  <div tabindex="2" class="select2-dd"></div>\
  </div>\
  <div class="col-sm-12 col-md-3 form-group">\
  <label for="Category">Category</label>\
  <input type="text" tabindex="3" class="form-control" placeholder="Category">\
  </div>\
  <div class="col-sm-12 col-md-3 form-group">\
  <label for="Query Name">Query Name</label>\
  <input type="text" tabindex="4" class="form-control" placeholder="Query Name">\
  </div>\
  <div class="col-sm-12 col-md-12 text-right form-group">\
  <button class="btn btn-info">\
  <i class="icofont icofont-hand-up"></i>\
  <span>Save Query</span>\
  </button>\
  </div>\
  </div>\
  <div class="form-group row">\
  <div class="col-sm-12">\
  <a class="full-screen">\
  <i class="icofont icofont-resize ft-20"></i>\
  </a>\
  <textarea rows="2" cols="2" tabindex="5" class="form-control min-h-93 form-control-variant" placeholder="Enter your query. Use semicolon(;) as a separator for multiple queries"></textarea>\
  </div>\
  </div>\
  <div class="row">\
  <div class="col-sm-12 form-group col-md-3">\
  <input type="text" tabindex="20" class="form-control" placeholder="Expected rows effected eg 100">\
  </div>\
  <div class="col-sm-12 col-md-3">\
  <div tabindex="7" tabindex="21" class="select2-dd"></div>\
  </div>\
  <div class="col-sm-12 col-md-6 text-right">\
  <button class="btn btn-info">\
  <i class="icofont icofont-hand-up"></i>\
  <span>Save Query</span>\
  </button>\
  <button type="button" tabindex="22" class="btn btn-success">\
  <i class="icofont icofont-play-alt-2"></i>\
  <span>Execute</span>\
  </button>\
  <button type="button" tabindex="23" class="btn btn-primary">\
  <i class="icofont icofont-play-alt-2"></i>\
  <span>Commit</span>\
  </button>\
  <button type="button" tabindex="24" class="btn btn-danger">\
  <i class="icofont icofont-ui-reply"></i>\
  <span>Rollback</span>\
  </button>\
  </div>\
  </div>\
  </form>\
  </div>\
  </div>\
  <div class="row m-t-15">\
  <div class="col-sm-12">\
  <h5 class="output-header">Output <span class="rows-effected">Rows Effected: 234</span></h5>\
  </div>\
  <div class="col-md-12 m-t-15">\
  <div>\
  <table style="width: 100%" id="basic-btn-' +
        count +
        '" class="basic-btn-1 table export-btn-table table-striped table-bordered">\
  <thead>\
  <tr>\
  <th>SCREENID</th>\
  <th>CONTEXT</th>\
  <th>KEY</th>\
  <th>VALUE</th>\
  <th>DESCRIPTION</th>\
  <th>LAST_CHG_USER</th>\
  <th>LAST_CHG_DATE</th>\
  <th>ENVIRONMENT</th>\
  </tr>\
  </thead>\
  <tbody>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  <tr>\
  <td> Risk Measure Override </td>\
  <td>Analytic_Id_Mapping</td>\
  <td>_Duration</td>\
  <td>manual_duration</td>\
  <td>{PROVIDE_ID}_{RISK_MEASURE VALUE-ANALYTIC_ID}</td>\
  <td>SVC_OP</td>\
  <td>26/12/2018 08:52:46</td>\
  <td>(Null)</td>\
  </tr>\
  </tbody>\
  </table>\
  </div>\
  </div>\
  </div>\
  </div>'
    ).insertAfter(".tabs-container > div.tab-pane:last-child");
    $(".select2-dd").select2({
      placeholder: "Select Value",
      allowClear: true
    });
    $(".popover-btn").popover({
      placement: "right",
      title: "Please specify the Reason",
      html: true,
      content: $(".popover-container").html()
    });
    $(".jiraId").tokenfield({
      limit: 1
    });
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
    $(this).prop("disabled", true);
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
  $(".jiraId").tokenfield({
    limit: 1
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
  $(".popover-btn").popover({
    placement: "right",
    title: "Please specify the Reason",
    html: true,
    content: $(".popover-container").html()
  });
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
  $("#createJira").on("click", function() {
    $(".jiraId").tokenfield("setTokens", "QWES-1566-GAF123");
    // $('.jiraId').tokenfield('disable');
  });
});

$(document).ready(function () {
    /*Add tabs dynamically in Query Executer */
    $("#add-tab").on("click", function () {
        var count = $("ul.query-tabs").find("li").length + 1;
        $(".query-tabs").find("li a").removeClass("active");
        $(".query-tabs").append("<li class='nav-item'><a class='nav-link active' data-toggle='tab' href='#tab" + count + "' role='tab' >Tab" + count + "</a></li>");
        $(".tab-pane").removeClass("active");
        $(' <div class="tab-pane active" id="tab' + count + '" role="tabpanel"><div class="row"><div class="col-md-12"><h4 class="section-heading">Jira Details</h4></div></div><div class="row"><div class="col-md-12"><form class="jira-details" action="#!"><div class="row"><div class="col-md-6 col-lg-3 col-sm-12"><div class="input-group input-group-button"><input type="text" tabindex="1" class="form-control jiraId" placeholder="Jira ID"><span class="input-group-addon" id="basic-addon10"><button class="btn btn-primary">Search</button></span></div></div><div class="col-md-6 col-lg-3 col-sm-12"><input type="text" tabindex="2" class="form-control" placeholder="Summary"></div><div class="col-md-6 col-lg-3 col-sm-12"><label class="l-h-34"><strong>Jira Status:</strong><span>InProgress</span></label></div><div class="col-md-6 col-lg-3 col-sm-12"><label class="l-h-34"><strong>Beta Execution Status:</strong><span>Done</span></label></div></div><div class="row"><div class="col-md-6 col-lg-3 col-sm-12"><div tabindex="3" class="select2-dd"></div></div><div class="col-md-6 col-lg-3 col-sm-12"><div tabindex="4" class="select2-dd"></div></div><div class="col-md-6 col-lg-3 col-sm-12"><div tabindex="5" class="select2-dd"></div></div><div class="col-md-6 col-lg-3 col-sm-12"><div tabindex="6" class="select2-dd"></div></div></div><div class="row text-right"><div class="col-md-12">\
        <button type="button" tabindex="7"  class="btn btn-info">\
        <i class="icofont icofont-refresh"></i><span class="btn-text">Reset</span>\
        </button>\
        <button type="button" tabindex="8"  class="btn btn-default">\
        <i class="icofont icofont-edit"></i><span class="btn-text">Edit</span>\
        </button>\
        <button type="button" tabindex="9"  class="btn btn-success">\
        <i class="icofont icofont-hand-up"></i><span class="btn-text">Save</span>\
        </button>\
        <button type="button"  tabindex="10"  id="createJira" class="btn btn-primary">\
        <i class="icofont icofont-hand-up"></i><span class="btn-text">Create JIRA Ticket</span>\
        </button>\
        </div></div></form></div></div><div class="row m-t-15"><div class="col-sm-12"><form action="#!"><div class="row"><div class="col-md-3"><label>Skip Beta Execution</label></div><div class="col-md-3"><div class="form-radio inline-block"><form><div class="radio radio-inline"><label><input class="popover-btn" tabindex="11" type="radio" checked name="radio"><i class="helper"></i>Yes</label></div><div class="hidden popover-container"><form action="#!" id="popForm" method="get"><div><textarea rows="8" name="about" id="about" class="form-control input-md"></textarea><button type="button" id="saveBtn" class="btn m-t-5 btn-primary"><i class="icofont icofont-check"></i> Save</button><button type="button" id="cancelBtn" class="btn m-t-5 btn-danger"><i class="icofont icofont-close"></i> Cancel</button></div></form></div><div class="radio radio-inline"><label><input type="radio" tabindex="12" name="radio"><i class="helper"></i>No</label></div></form></div></div><div class="col-md-3"><label>Skip Approval</label></div><div class="col-md-3"><div class="form-radio inline-block"><form><div class="radio radio-inline"><label><input class="popover-btn" tabindex="13" type="radio" checked name="approval"><i class="helper"></i>Yes</label></div><div class="radio radio-inline"><label><input tabindex="14" type="radio" name="approval"><i class="helper"></i>No</label></div></form></div></div></div><div class="row m-t-5"><div class="col-md-6 col-sm-12"><div class="form-group row"><div class="col-sm-12"><input type="text" tabindex="15" class="form-control" placeholder="Reason"></div></div><div class="row"><div class="col-sm-12"><div tabindex="16" class="select2-dd"></div></div></div><div class="form-group row"><div class="col-sm-12"><input type="text" tabindex="17" class="form-control" placeholder="Category"></div></div><div class="form-group row"><div class="col-sm-12"><input type="text" tabindex="18" class="form-control" placeholder="Query Name"></div></div></div><div class="col-md-6 col-sm-12"><div class="form-group row"><div class="col-sm-12"><textarea rows="5" cols="5" tabindex="19" class="form-control min-h-142 form-control-variant" placeholder="Enter your query. Use semicolon(;) as a separator for multiple queries"></textarea></div></div><div class="row"><div class="col-sm-12 form-group col-md-6"><input type="text" tabindex="6" class="form-control" tabindex="20"  placeholder="Expected rows effected eg 100"></div><div class="col-sm-12 col-md-6"><div tabindex="21" class="select2-dd"></div></div></div>\
        </div></div>\
        <div class="form-group row"><div class="col-sm-12 text-right">\
        <button class="btn btn-info">\
        <i class="icofont icofont-hand-up"></i><span class="btn-text">Save Query</span>\
        </button>\
        <button type="button" tabindex="22" class="btn btn-success">\
        <i class="icofont icofont-play-alt-2"></i><span class="btn-text">Execute</span>\
        </button>\
        <button type="button" tabindex="23" class="btn btn-primary">\
        <i class="icofont icofont-play-alt-2"></i><span class="btn-text">Commit</span>\
        </button>\
        <button type="button" tabindex="24" class="btn btn-danger">\
        <i class="icofont icofont-ui-reply"></i><span class="btn-text">Rollback</span>\
        </button>\
        </div></div>\</form></div></div></div>').insertAfter(".tabs-container > div.tab-pane:last-child");
        $(".select2-dd").select2({
            placeholder: "Select Value",
            allowClear: true
        });
        $('.popover-btn').popover({
            placement: 'right',
            title: 'Please specify the Reason',
            html: true,
            content: $('.popover-container').html()
        });
        $('.jiraId').tokenfield({
            limit: 1
        });
    })
    /*Add tabs dynamically in Query Executer */
    $(".background-layout").css("min-height", $(document).height())
    $(document).on("click", ".popover-btn", function () {
        $(this).attr('disabled', true);
        $(".background-layout").show();
        $("body").css("overflow", "hidden");
    });
    $(document).on("click", "#saveBtn,#cancelBtn", function () {
        $('.popover-btn').attr('disabled', false);
        $(".background-layout").hide();
        $("body").css("overflow", "auto");
        $('.popover-btn').popover('hide');
    });
    $('.jiraId').tokenfield({
        limit: 1
    });

    var width = $(window).width();
    if (width <= 768) {
        $('#basic-btn-1').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
            responsive: true,
            oLanguage: {
                sLengthMenu: " _MENU_ ",
                sSearch: "",
                sSearchPlaceholder: "Search",
            }
        });
    } else {
        $('#basic-btn-1').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'pageLength'
            ],
            responsive: true,
        });
    }
    $('.popover-btn').popover({
        placement: 'right',
        title: 'Please specify the Reason',
        html: true,
        content: $('.popover-container').html()

    });
    $(".select2-dd").select2({
        placeholder: "Select Value",
        allowClear: true
    });
    $("#countdown").countdown360({
        radius: 60,
        seconds: 100,
        fontColor: '#FFFFFF',
        autostart: false,
        onComplete: function () {
            console.log('done')
        }
    }).start()
    $("#createJira").on("click", function () {
        $('.jiraId').tokenfield('setTokens', 'QWES-1566-GAF123');
        // $('.jiraId').tokenfield('disable');
    });
    Highcharts.chart('result', {
        exporting: {
            enabled: false
        },
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Rows Effected'
        },
        xAxis: {
            categories: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' hundred'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Rows Effected',
            data: [678, 345, 76, 876, 234, 987, 123, 90, 23, 678, 54]
        }]
    });
}) 
$(document).ready(function() {
  toastr.info("Hi Anil Welcome to new Cornus Website");
  /*Change table row color on click of Checkbox */
  $(".checkbox-fade input").on("click", function() {
    $(this)
      .parents("tr")
      .toggleClass("active-row");
  });
  /*Change table row color on click of Checkbox */
  /*Center align popup window */
  var width = $(".md-modal").width() / 2;
  var height = $(".md-modal").height() / 2;
  $(".md-modal")
    .css("margin-left", -width)
    .css("margin-top", -height);
  /*Center align popup window */
  /*Enable responsive feature of datatables in tabs/accordion */
  // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //     $($.fn.dataTable.tables(true)).DataTable()
  //         .columns.adjust()
  //         .responsive.recalc();
  //     $(".export-btn-table").parents(".dataTables_wrapper").find(".dataTables_filter").addClass("full-width-search");
  // });
  $("#accordion").on("shown.bs.collapse", function(e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
    $(".export-btn-table")
      .parents(".dataTables_wrapper")
      .find(".dataTables_filter")
      .addClass("full-width-search");
  });
  /*Enable responsive feature of datatables in tabs/accordion */
  /*Hide show all rows large content */
  $(".expand-collapse-row").on("click", function() {
    if (
      $(this)
        .find("i")
        .hasClass("icofont-circled-down")
    ) {
      $(".message-body").removeClass("expand");
    } else {
      $(".message-body").addClass("expand");
    }
    $(".expand-collapse-row i").toggleClass(
      "icofont-circled-up icofont-circled-down"
    );
  });
  /*Hide show all rows large content */
  /*Hide show large content */
  $(".expand-data").on("click", function() {
    $(this)
      .parents("tr")
      .find(".message-body")
      .toggleClass("expand");
  });
  /*Hide show large content */
  /*Accordion*/
  $("#accordion .panel-title").on("click", function() {
    $(this)
      .find("i.icon")
      .toggleClass("icon-plus-sign icon-minus-sign");
  });
  /*Accordion*/
  /* Select2 Dropdown */
  $(".select2-dd").select2({
    placeholder: "Select",
    allowClear: true
  });
  /* Select2 Dropdown */
  /* Loader */
  $("#run").click(function() {
    $(".loading-icon,.loader-bg").css("display", "inline-block");
    setTimeout(function() {
      $(".loading-icon,.loader-bg").hide();
      $("#status").show();
    }, 3000);
  });
  /* Loader */
  /*Full Screen Textarea */
  $(document).on("click", ".full-screen", function() {
    $(this).toggleClass("full-screen-expanded");
    $(this)
      .next("textarea")
      .toggleClass("full-txt");
    $("body").toggleClass("overflow-hide");
  });
  /*Full Screen Textarea */
  /*Dynamic Menus*/
  $(".header-section").html(
    '\
    <!-- Menu header start -->\
    <nav class="navbar header-navbar" data-toggle="affix">\
    <div class="navbar-wrapper">\
        <div class="navbar-logo"><a class="mobile-menu" id="mobile-collapse" href="#!">\
            <i class="ti-menu"></i></a><a class="mobile-search morphsearch-search" href="#"><i class="ti-search"></i></a><a href="#!"><a href="#">CRONUS</a></a>\
            <a class="mobile-options"><i class="ti-more"></i></a>\
        </div>\
        <div class="navbar-container container-fluid">\
            <div>\
                <ul class="nav-left">\
                <li><a id="collapse-menu" href="#">\
                    <i class="ti-menu"></i></a>\
                </li>\
                </ul>\
                <ul class="nav-right">\
                <li class="header-notification lng-dropdown">\
                    <a href="#" id="dropdown-active-item">\
                    Current Environment Selected is <i class="icofont icofont-contrast  m-r-5"></i> Beta</a>\
                    <ul class="show-notification">\
                        <li><a href="#" data-lng="Beta">\
                            <i class="icofont icofont-contrast  m-r-5"></i> Beta</a>\
                        </li>\
                        <li><a href="#" data-lng="Delta"><i class="icofont icofont-contrast  m-r-5"></i> Delta</a></li>\
                        <li><a href="#" data-lng="Prod"><i class="icofont icofont-contrast  m-r-5"></i> PROD</a></li>\
                        <li><a href="#" data-lng="QA"><i class="icofont icofont-contrast  m-r-5"></i>\
                            QA</a>\
                        </li>\
                    </ul>\
                </li>\
                <li class="user-profile header-notification">\
                    <a href="#!"><img src="assets/images/user.png" alt="User-Profile-Image"><span>Anil Kumar</span>\
                    <i class="ti-angle-down"></i></a>\
                    <ul class="show-notification profile-notification">\
                        <li><a href="profile.html"><i class="ti-user"></i> Profile</a>\
                        </li>\
                        <li><a href="#!"><i class="ti-layout-sidebar-left"></i> Logout</a></li>\
                    </ul>\
                </li>\
                </ul>\
            </div>\
        </div>\
    </div>\
    </nav> \
    <div class="main-menu">\
    <div class="main-menu-header">\
    <img class="img-40" src="assets/images/user.png" alt="User-Profile-Image">\
    <div class="user-details">\
        <span>John Doe</span><span id="more-details">UX Designer<i class="icon-arrow-down"></i></span>\
    </div>\
    </div>\
    <div class="main-menu-content">\
    <ul class="main-navigation"></ul>\
    </div>\
     '
  );
  var data = {
    menu: [
      {
        name: "Home",
        link: "Home.html",
        sub: null,
        menucounter: "1",
        icon: '<i class="icofont icofont-dashboard-web"></i>'
      },
      {
        name: "Database Utilities",
        link: "",
        sub: [
          {
            name: "Query Executer",
            link: "QueryExecuter.html",
            sub: null,
            menucounter: "2",
            icon: ' <i class="icofont icofont-database"></i>'
          },
          {
            name: "Query Builder",
            link: "QueryBuilder.html",
            sub: null,
            menucounter: "2",
            icon: '<i class="icofont icofont-database"></i>'
          },
          {
            name: "Import Database",
            link: "ImportDatabase.html",
            sub: null,
            menucounter: "2",
            icon: '<i class="icofont icofont-database"></i>'
          },
          {
            name: "Data Manipulation",
            link: "DataManipulation.html",
            sub: null,
            menucounter: "2",
            icon: '<i class="icofont icofont-database"></i>'
          }
        ],
        icon: '<i class="icofont icofont-database-locked"></i>',
        menucounter: "2"
      },
      {
        name: "Risk Measures",
        link: "",
        sub: [
          {
            name: "Substitute Cusips",
            link: "SubstituteCusips.html",
            sub: null,
            menucounter: "3",
            icon: ' <i class="icofont icofont-numbered"></i>'
          },
          {
            name: "Stale Risk Measure",
            link: "StaleRiskMeasure.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-numbered"></i>'
          },
          {
            name: "Security Stale Notes",
            link: "SecurityStaleNotes.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Sec Analytics Override",
            link: "SecAnalyticsOverride.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Risk Measure Override",
            link: "RiskMeasureOverride.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Risk Measure Live",
            link: "RiskMeasureLive.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Risk Attribution",
            link: "RiskAttribution.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Rejected Cusips",
            link: "RejectedCusips.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Regression",
            link: "Regression.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Security Life Cycle",
            link: "SecurityLifeCycle.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Client Analytics",
            link: "ClientAnalytics.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          },
          {
            name: "Model Switch",
            link: "ModelSwitch.html",
            sub: null,
            menucounter: "3",
            icon: '<i class="icofont icofont-notepad"></i>'
          }
        ],
        icon: '<i class="icofont icofont-measure"></i>',
        menucounter: "3"
      },
      {
        name: "Configuration",
        link: "",
        sub: [
          {
            name: "Model Input Config",
            link: "ModelInputConfig.html",
            sub: null,
            menucounter: "4",
            icon: '<i class="icofont icofont-settings"></i>'
          },
          {
            name: "Credit Entity Attribute",
            link: "CreditEntityAttribute.html",
            sub: null,
            menucounter: "4",
            icon: '<i class="icofont icofont-settings"></i>'
          },
          {
            name: "Analytic Id Configuration",
            link: "AnalyticIdConfig.html",
            sub: null,
            menucounter: "4",
            icon: '<i class="icofont icofont-settings"></i>'
          },
          {
            name: "Agency Model Map",
            link: "AgencyModelMap.html",
            sub: null,
            menucounter: "4",
            icon: '<i class="icofont icofont-settings"></i>'
          }
        ],
        icon: '<i class="icofont icofont-ui-settings"></i>',
        menucounter: "4"
      },
      {
        name: "Time Series",
        link: "",
        sub: [
          {
            name: "TS Definition",
            link: "TimeSeriesDefination.html",
            sub: null,
            menucounter: "5",
            icon: '<i class="icofont icofont-clock-time"></i>'
          },
          {
            name: "Manage Master Table",
            link: "ManageMasterTable.html",
            sub: null,
            menucounter: "5",
            icon: '<i class="icofont icofont-database-add"></i>'
          },
          {
            name: "Back Filling",
            link: "BackFilling.html",
            sub: null,
            menucounter: "5",
            icon: '<i class="icofont icofont-database-add"></i>'
          }
        ],
        icon: '<i class="icofont icofont-time"></i>',
        menucounter: "5"
      },
      {
        name: "Reports",
        link: "",
        sub: [
          {
            name: "Invocation Summary",
            link: "InvocationSummary.html",
            sub: null,
            menucounter: "6",
            icon: '<i class="icofont icofont-ui-text-chat"></i>'
          },
          {
            name: "Event Viewer",
            link: "EventViewer.html",
            sub: null,
            menucounter: "6",
            icon: '<i class="icofont icofont-calendar"></i>'
          },
          {
            name: "Dashboard",
            link: "Dashboard.html",
            sub: null,
            menucounter: "6",
            icon: '<i class="icofont icofont-dashboard-web"></i>'
          }
        ],
        icon: '<i class="icofont icofont-files"></i>',
        menucounter: "6"
      },
      {
        name: "Proteus",
        link: "",
        sub: [
          {
            name: "Query Executer",
            link: "ProteusQueryExecuter.html",
            sub: null,
            menucounter: "7",
            icon: '<i class="icofont icofont-database"></i>'
          }
        ],
        icon: '<i class="icofont icofont-database"></i>',
        menucounter: "7"
      },
      {
        name: "Impact Study",
        link: "",
        sub: [
          {
            name: "User Dashboard",
            link: "Userdashboard.html",
            sub: null,
            menucounter: "8",
            icon: '<i class="icofont icofont-business-man-alt-2"></i>'
          },
          {
            name: "Admin Dashboard",
            link: "Admindashboard.html",
            sub: null,
            menucounter: "8",
            icon: '<i class="icofont icofont-business-man"></i>'
          }
        ],
        icon: '<i class="icofont icofont-architecture-alt"></i>',
        menucounter: "8"
      },
      {
        name: "Settings",
        link: "",
        sub: [
          {
            name: "User Management",
            link: "UserManagement.html",
            sub: null,
            menucounter: "9",
            icon: '<i class="icofont icofont-users"></i>'
          },
          {
            name: "Service User",
            link: "ServiceUser.html",
            sub: null,
            menucounter: "9",
            icon: '<i class="icofont icofont-users-alt-6"></i>'
          },
          {
            name: "Service Permissions",
            link: "ServicePermissions.html",
            sub: null,
            menucounter: "9",
            icon: '<i class="icofont icofont-law-document"></i>'
          }
        ],
        icon: '<i class="icofont icofont-settings"></i>',
        menucounter: "9"
      }
    ]
  };
  var getMenuItem = function(itemData) {
    var item = $("<li class='nav-item'>").append(
      $("<a>", {
        href: itemData.link,
        html: itemData.icon + itemData.name
      })
    );
    $("<li class='nav-item'> a").append(itemData.icon);
    if (itemData.sub) {
      // item.removeClass("nav-item");
      var subList = $("<ul class='tree-1'>");
      $.each(itemData.sub, function() {
        subList.append(getMenuItem(this));
      });
      item.append(subList);
    }
    return item;
  };

  var $menu = $("ul.main-navigation");
  $.each(data.menu, function() {
    $menu.append(getMenuItem(this));
  });
  // $menu.menu();
  var currentUrl = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  function findObjectByKey(data, link, currentUrl) {
    for (var i = 0; i < data.menu.length; i++) {
      if (data.menu[i].link.toLowerCase() == currentUrl) {
        $(
          ".main-menu-content > .main-navigation > li:nth-child(" +
            data.menu[i].menucounter +
            ")"
        ).addClass("has-class");
        return false;
      }
      if (data.menu[i].sub != null) {
        for (var j = 0; j < data.menu[i].sub.length; j++) {
          if (data.menu[i].sub[j].link.toLowerCase() == currentUrl) {
            $(
              ".main-menu-content > .main-navigation > li:nth-child(" +
                data.menu[i].sub[j].menucounter +
                ")"
            ).addClass("has-class");
            return false;
          }
        }
      }
    }
  }
  var obj = findObjectByKey(data, "link", currentUrl);
  /*Dynamic Menus*/
});
$(window).on("load", function() {
  /*Add class in search section for datatabes with buttons */
  $(".export-btn-table")
    .parents(".dataTables_wrapper")
    .find(".dataTables_filter")
    .addClass("full-width-search");
  /*Add class in search section for datatabes with buttons */
});

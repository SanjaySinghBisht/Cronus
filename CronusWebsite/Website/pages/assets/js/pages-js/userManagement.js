$(document).ready(function() {
  /*Move rows between two tables*/
  var stockTable = $(".group-username").dataTable({
    bDestroy: true
  }); // first table

  var catalogTable = $(".non-group-username").dataTable({
    bDestroy: true
  }); // Second table

  stockTable.on("click", "tbody tr td input", function() {
    if ($(this).is(":checked")) {
      $(this)
        .parents("tr")
        .addClass("selected");
    } else {
      $(this)
        .parents("tr")
        .removeClass("selected");
    }
  });
  catalogTable.on("click", "tbody tr td input", function() {
    if ($(this).is(":checked")) {
      $(this)
        .parents("tr")
        .addClass("selected");
    } else {
      $(this)
        .parents("tr")
        .removeClass("selected");
    }
  });
  $("#btnRight").on("click", function() {
    if ($(".non-group-username tr td input:checked").length > 0) {
      swal({
        title: "Are you sure to move selected user?",
        text: "User will be shifted from Non group to group",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          moveRows(catalogTable, stockTable);
          swal("User is successfully shifted to group", {
            icon: "success"
          });
        } else {
          swal("User is not shifted to group");
        }
      });
    } else {
      swal({
        title: "Error !!!",
        text: "Please select records to be moved",
        icon: "warning",
        buttons: true,
        dangerMode: true
      });
    }
  });

  $("#btnLeft").on("click", function() {
    if ($(".group-username tr td input:checked").length > 0) {
      swal({
        title: "Are you sure to move selected user?",
        text: "User will be shifted from group to Non group",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          moveRows(stockTable, catalogTable);
          swal("User is successfully shifted to Non group", {
            icon: "success"
          });
        } else {
          swal("User is not shifted to Non group");
        }
      });
    } else {
      swal({
        title: "Error !!!",
        text: "Please select records to be moved",
        icon: "warning",
        buttons: true,
        dangerMode: true
      });
    }
  });
  function moveRows(fromTable, toTable) {
    var $row = fromTable.find(".selected");
    $.each($row, function(k, v) {
      if (this != null) {
        addRow = fromTable.fnGetData(this);
        // toTable.fnAddData(addRow);
        var a = toTable.fnAddData(addRow);
        var oSettings = toTable.fnSettings();
        var nTr = oSettings.aoData[a[0]].nTr;
        nTr.setAttribute("class", "swappedRow");
        fromTable.fnDeleteRow(this);
      }
    });
  }
  var dataObject = [
    ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
    ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
    ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
    ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"],
    ["SBisht", "Sanjay Singh Bisht", "sanjay.bisht@pimco.com"]
  ];

  var container = document.getElementById("users-grid");
  var hot = new Handsontable(container, {
    data: dataObject,
    autoColumnSize: false,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true,
    stretchH: "all",
    autoWrapRow: true,
    maxRows: 10,
    manualRowResize: true,
    manualColumnResize: true,
    rowHeaders: false,
    colHeaders: function(col) {
      switch (col) {
        case 0:
          return "User ID";
        case 1:
          return "Name";
        case 2:
          return "Email ID";
      }
    },
    columns: [
      {
        data: 0,
        type: "text"
      },
      {
        data: 1,
        type: "text"
      },
      {
        data: 2,
        type: "text"
      }
    ]
  });
  var width = $(window).width();
  if (width <= 768) {
    $("#basic-btn-1,#basic-btn-2").DataTable({
      responsive: true,
      bLengthChange: false,
      bPaginate: false,
      scrollY: "400px",
      dom: "Bfrtip",
      select: true,
      buttons: [
        {
          text: "Select all",
          action: function() {
            table.rows().select();
          }
        },
        {
          text: "Select none",
          action: function() {
            table.rows().deselect();
          }
        }
      ],
      oLanguage: {
        sLengthMenu: " _MENU_ ",
        sSearch: "",
        sSearchPlaceholder: "Search"
      },
      bDestroy: true
    });
    $("#basic-btn-5").DataTable({
      responsive: true,
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      oLanguage: {
        sLengthMenu: " _MENU_ ",
        sSearch: "",
        sSearchPlaceholder: "Search"
      },
      bDestroy: true
    });
  } else {
    $("#basic-btn-1,#basic-btn-2").DataTable({
      bLengthChange: false,
      bPaginate: false,
      scrollY: "400px",
      responsive: true,
      bDestroy: true,
      select: true,
      buttons: [
        {
          text: "Select all",
          action: function() {
            table.rows().select();
          }
        },
        {
          text: "Select none",
          action: function() {
            table.rows().deselect();
          }
        }
      ]
    });
    $("#basic-btn-5").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true,
      bDestroy: true
    });
  }
});

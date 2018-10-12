$(document).ready(function() {
  /*Move rows between two tables*/
  var stockTable = $(".group-username").dataTable({
    bDestroy: true
  }); // first table

  var catalogTable = $(".non-group-username").dataTable({
    bDestroy: true
  }); // Second table

  stockTable.on("click", "tbody tr td input", function() {
    $(this).parents("tr").toggleClass("selected"); 
  });
  catalogTable.on("click", "tbody tr td input", function() {
    $(this).parents("tr").toggleClass("selected"); 
  });
  $('#btnRight').on('click',function () {
    moveRows(catalogTable, stockTable);
  });
   
  $('#btnLeft').on('click',function () {
    moveRows(stockTable, catalogTable);
  });
  function moveRows(fromTable, toTable){
    var $row= fromTable.find(".selected");
    $.each($row, function(k, v){
      if(this != null){
        addRow = fromTable.fnGetData(this);
        toTable.fnAddData(addRow);
        toTable.toggleClass("selected"); 
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
      buttons: [],
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
      bDestroy: true
    });
    $("#basic-btn-5").DataTable({
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true,
      bDestroy: true
    });
  }
});

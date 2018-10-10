$(document).ready(function() {
  var dataObject = [
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"],
    ["JKSJKSA7667ASHJAS", "98798NMB78"]
  ];

  var container = document.getElementById("users-grid");
  var hot = new Handsontable(container, {
    data: dataObject,
    autoColumnSize: false,
    rowHeaders: true,
    colHeaders: true,
    height: 300,
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
          return "Old Cusip";
        case 1:
          return "New Cusip";
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
      }
    ]
  });
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
      scrollY: "210px",
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "pdf", "print", "pageLength"],
      responsive: true
    });
  }
});

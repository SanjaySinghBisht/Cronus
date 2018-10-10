$(document).ready(function() {
  $(".select2-dd").select2({
    placeholder: "Select",
    allowClear: true
  });
  $(".fileinput").fileinput({
    showCaption: false,
    dropZoneEnabled: true
  });
  $('[data-toggle="popover"]').popover({
    trigger: "hover"
  });
  var dataObject = [
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892"]
  ];
  var dataObject1 = [
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"]
  ];
  var dataObject2 = [
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"],
    [true, "AJJKAJKJK78918J", "KKHHIKNB5892", "KKHHIKNB5892", "KKHHIKNB5892"]
  ];

  var container = document.getElementById("agencyModalMap");
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
          var txt =
            '<div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span><span class="text-inverse">Select All</span></label></div>';
          return txt;
        case 1:
          return "Cusip*";
        case 2:
          return "Models*";
        case 3:
          return "Notes*";
      }
    },
    columns: [
      {
        data: 0,
        type: "checkbox"
      },
      {
        data: 1,
        type: "text"
      },
      {
        data: 2,
        type: "text"
      },
      {
        data: 3,
        type: "text"
      }
    ]
  });
  var data = [],
    example2 = document.getElementById("agencyModalMap1"),
    hot2,
    searchFiled2;

  hot2 = new Handsontable(example2, {
    data: dataObject1,
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
          var txt =
            '<div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span><span class="text-inverse">Select All</span></label></div>';
          return txt;
        case 1:
          return "Cusip";
        case 2:
          return "Models";
        case 3:
          return "Types";
        case 4:
          return "Notes";
      }
    },
    columns: [
      {
        data: 0,
        type: "checkbox"
      },
      {
        data: 1,
        type: "text"
      },
      {
        data: 2,
        type: "text"
      },
      {
        data: 3,
        type: "text"
      },
      {
        data: 4,
        type: "text"
      }
    ],
    search: {
      searchResultClass: "customClass"
    }
  });
  searchFiled2 = document.getElementById("search_field2");

  Handsontable.dom.addEvent(searchFiled2, "keyup", function(event) {
    var search = hot2.getPlugin("search");
    var queryResult = search.query(this.value);

    hot2.render();
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    var data = [],
      example3 = document.getElementById("agencyModalMap2"),
      hot3,
      searchFiled3;

    hot3 = new Handsontable(example3, {
      data: dataObject2,
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
            var txt =
              '<div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span><span class="text-inverse">Select All</span></label></div>';
            return txt;
          case 1:
            return "Cusip";
          case 2:
            return "Models";
          case 3:
            return "Types";
          case 4:
            return "Notes";
        }
      },
      columns: [
        {
          data: 0,
          type: "checkbox"
        },
        {
          data: 1,
          type: "text"
        },
        {
          data: 2,
          type: "text"
        },
        {
          data: 3,
          type: "text"
        },
        {
          data: 4,
          type: "text"
        }
      ],
      search: {
        searchResultClass: "customClass"
      }
    });
    searchFiled3 = document.getElementById("search_field3");

    Handsontable.dom.addEvent(searchFiled3, "keyup", function(event) {
      var search = hot3.getPlugin("search");
      var queryResult = search.query(this.value);

      hot3.render();
    });
  });
});

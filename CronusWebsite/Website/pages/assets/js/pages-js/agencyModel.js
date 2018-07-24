$(document).ready(function () {
    var dataObject = [
        [true, "AJJKAJKJK78918J", "KKHHIKNB5892"],
        [true, "AJJKAJKJK78318J", "KKHDDDNB5892"],
        [true, "AJJKAJKJK78218J", "KCCHIKNB5892"],
        [true, "AJJKAJKJK78968J", "KKVVIKNB5892"],
    ];

    var container = document.getElementById('agencyModalMap');
    var hot = new Handsontable(container, {
        data: dataObject,
        autoColumnSize: false,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        dropdownMenu: true,
        stretchH: 'all',
        autoWrapRow: true,
        maxRows: 10,
        manualRowResize: true,
        manualColumnResize: true,
        rowHeaders: false,
        colHeaders: function (col) {
            switch (col) {
                case 0:
                    var txt = '<div class="checkbox-fade fade-in-primary"><label><input type="checkbox" value=""><span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span><span class="text-inverse">Select All</span></label></div>';
                    return txt;
                case 1:
                    return "SSM ID*";
                case 2:
                    return "CUSIP*";
            }
        },
        columns: [{
                data: 0,
                type: 'checkbox'
            },
            {
                data: 1,
                type: 'text'
            },
            {
                data: 2,
                type: 'text'
            }
        ]
    });
});
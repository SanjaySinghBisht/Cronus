(function (g) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (d) {
        return g(d, window, document)
    }) : "object" === typeof exports ? module.exports = function (d, f) {
        d || (d = window);
        if (!f || !f.fn.dataTable) f = require("datatables.net")(d, f).$;
        f.fn.dataTable.Buttons || require("datatables.net-buttons")(d, f);
        return g(f, d, d.document)
    } : g(jQuery, window, document)
})(function (g, d, f, h) {
    d = g.fn.dataTable;
    g.extend(d.ext.buttons, {
        colvis: function (a, b) {
            return {
                extend: "collection",
                text: function (b) {
                    return b.i18n("buttons.colvis", "Column visibility")
                },
                className: "buttons-colvis",
                buttons: [{
                    extend: "columnsToggle",
                    columns: b.columns,
                    columnText: b.columnText
                }]
            }
        },
        columnsToggle: function (a, b) {
            return a.columns(b.columns).indexes().map(function (a) {
                return {
                    extend: "columnToggle",
                    columns: a,
                    columnText: b.columnText
                }
            }).toArray()
        },
        columnToggle: function (a, b) {
            return {
                extend: "columnVisibility",
                columns: b.columns,
                columnText: b.columnText
            }
        },
        columnsVisibility: function (a, b) {
            return a.columns(b.columns).indexes().map(function (a) {
                return {
                    extend: "columnVisibility",
                    columns: a,
                    visibility: b.visibility,
                    columnText: b.columnText
                }
            }).toArray()
        },
        columnVisibility: {
            columns: h,
            text: function (a, b, c) {
                return c._columnText(a, c)
            },
            className: "buttons-columnVisibility",
            action: function (a, b, c, e) {
                a = b.columns(e.columns);
                b = a.visible();
                a.visible(e.visibility !== h ? e.visibility : !(b.length && b[0]))
            },
            init: function (a, b, c) {
                var e = this;
                a.on("column-visibility.dt" + c.namespace, function (b, d) {
                    !d.bDestroying && d.nTable == a.settings()[0].nTable && e.active(a.column(c.columns).visible())
                }).on("column-reorder.dt" +
                    c.namespace,
                    function () {
                        1 === a.columns(c.columns).count() && (e.text(c._columnText(a, c)), e.active(a.column(c.columns).visible()))
                    });
                this.active(a.column(c.columns).visible())
            },
            destroy: function (a, b, c) {
                a.off("column-visibility.dt" + c.namespace).off("column-reorder.dt" + c.namespace)
            },
            _columnText: function (a, b) {
                var c = a.column(b.columns).index(),
                    e = a.settings()[0].aoColumns[c].sTitle.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g, "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g,
                        "").replace(/^\s+|\s+$/g, "");
                return b.columnText ? b.columnText(a, c, e) : e
            }
        },
        colvisRestore: {
            className: "buttons-colvisRestore",
            text: function (a) {
                return a.i18n("buttons.colvisRestore", "Restore visibility")
            },
            init: function (a, b, c) {
                c._visOriginal = a.columns().indexes().map(function (b) {
                    return a.column(b).visible()
                }).toArray()
            },
            action: function (a, b, c, d) {
                b.columns().every(function (a) {
                    a = b.colReorder && b.colReorder.transpose ? b.colReorder.transpose(a, "toOriginal") : a;
                    this.visible(d._visOriginal[a])
                })
            }
        },
        colvisGroup: {
            className: "buttons-colvisGroup",
            action: function (a, b, c, d) {
                b.columns(d.show).visible(!0, !1);
                b.columns(d.hide).visible(!1, !1);
                b.columns.adjust()
            },
            show: [],
            hide: []
        }
    });
    return d.Buttons
});
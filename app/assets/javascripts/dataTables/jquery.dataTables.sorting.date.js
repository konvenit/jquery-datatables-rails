

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
  "date-dd-mmm-yyyy-pre": function ( a ) {
    var x = String(a)
    return Date( x )
  },

  "date-dd-mmm-yyyy-asc": function ( a, b ) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
  },

  "date-dd-mmm-yyyy-desc": function ( a, b ) {
    return ((a < b) ? 1 : ((a > b) ? -1 : 0));
  }
});

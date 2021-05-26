window.addEventListener(
  "load",
  function () {
    if (window.innerWidth >= 1440) {
      paginator({
        get_rows: function () {
          return document.getElementById("list").getElementsByTagName("div");
        },
        box: document.getElementById("list_index"),
        active_class: "color_page",
        rows_per_page: 15,
      });
    } else {
      paginator({
        get_rows: function () {
          return document.getElementById("list").getElementsByTagName("div");
        },
        box: document.getElementById("list_index"),
        active_class: "color_page",
        rows_per_page: 5,
      });
    }
  },
  false
);

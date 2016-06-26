(function () {
  "use strict";

  var navigation = document.querySelector("nav.navigation");
  var hideMenuClassName = "navigation--closed";
  var closed = navigation.classList.contains(hideMenuClassName);

  document.getElementById("navigation-toggle").onclick = function () {
    closed = !closed;
    if (closed) {
      navigation.classList.add(hideMenuClassName);
    } else {
      navigation.classList.remove(hideMenuClassName);
    }
    return false;
  };
})();

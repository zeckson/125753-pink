(function () {
  "use strict";

  var menu = document.querySelector(".navigation__menu");
  var hidden = menu.classList.contains("navigation__menu--hidden");
  document.getElementById("navigation-opener").onclick = function () {
    hidden = !hidden;
    if (hidden) {
      menu.classList.add("navigation__menu--hidden");
    } else {
      menu.classList.remove("navigation__menu--hidden");
    }
    return false;
  }
})();

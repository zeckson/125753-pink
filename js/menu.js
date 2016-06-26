(function () {
  "use strict";

  var menu = document.querySelector(".navigation__menu");
  var hidden = menu.classList.contains("navigation__menu--hidden");

  function toggler() {
    if (hidden) {
      menu.classList.add("navigation__menu--hidden");
    } else {
      menu.classList.remove("navigation__menu--hidden");
    }
  }

  document.getElementById("navigation-toggle").onclick = function () {
    hidden = !hidden;
    toggler();
    return false;
  };
  document.getElementById("navigation-close").onclick = function () {
    hidden = true;
    toggler();
    return false;
  }
})();

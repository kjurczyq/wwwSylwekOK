document.addEventListener("DOMContentLoaded", function () {
  const navi = document.querySelector(".navbar");
  console.log(navi);

  const navLinks = document.querySelectorAll("a.nav-link");
  console.log(navLinks);
  const navList = document.querySelector(".navbar-collapse");
  console.log(navList);

  function shadow() {
    if (window.scrollY >= 20) {
      navi.classList.add("shadow-bg");
    } else {
      navi.classList.remove("shadow-bg");
    }
  }
  //navbar znika po pliknieciu w element
  navLinks.forEach((item) =>
    item.addEventListener("click", () => navList.classList.remove("show"))
  );

  window.addEventListener("scroll", shadow);
});

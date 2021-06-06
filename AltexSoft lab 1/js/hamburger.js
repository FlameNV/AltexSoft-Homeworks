const menu = document.querySelector("#menu");
const header = document.querySelector("#navigation");
const menuIcon = document.querySelector("#menu-btn");
const links = document.getElementById("nav-links");

function openMenu() {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
  menuIcon.classList.toggle("is-clicked");
}

window.onscroll = () => {
  const logo = document.querySelector("#logo");
  const logoDark = document.querySelector("#logo-dark");
  const getSkoutBtn = document.querySelector("#get-skout-btn");
  const loginBtn = document.querySelector("#login-btn");

  if (window.innerWidth < 1440) {
    if (this.scrollY) {
      logo.classList.add("is-scroll");
      logoDark.classList.add("is-scroll");
      menuIcon.classList.add("is-scroll");
      header.classList.add("is-scroll");
    } else {
      logo.classList.remove("is-scroll");
      logoDark.classList.remove("is-scroll");
      menuIcon.classList.remove("is-scroll");
      header.classList.remove("is-scroll");
    }
  } else {
    if (this.scrollY) {
      logo.classList.add("is-scroll");
      logoDark.classList.add("is-scroll");
      menu.classList.add("is-scroll");
      header.classList.add("is-scroll");
      getSkoutBtn.classList.add("is-scroll");
      loginBtn.classList.add("is-scroll");
    } else {
      logo.classList.remove("is-scroll");
      logoDark.classList.remove("is-scroll");
      menu.classList.remove("is-scroll");
      header.classList.remove("is-scroll");
      getSkoutBtn.classList.remove("is-scroll");
      loginBtn.classList.remove("is-scroll");
    }
  }
};

let navLinksLi = menu.getElementsByClassName("menu-item");

for (let i = 0; i < navLinksLi.length; i++) {
  navLinksLi[i].firstElementChild.addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });

  if (window.innerWidth < 1440) {
    navLinksLi[i].firstElementChild.addEventListener("click", function () {
      links.style.display = "none";
      menuIcon.classList.remove("is-clicked");
    });
  }
}

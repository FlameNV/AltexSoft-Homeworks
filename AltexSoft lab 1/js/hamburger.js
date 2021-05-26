const menu = document.querySelector("#menu");

function openMenu() {
  var links = document.getElementById("nav-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

window.onscroll = () => {
  const logo = document.querySelector("#logo");
  const logoDark = document.querySelector("#logo-dark");
  const menuIcon = document.querySelector("#menu-icon");
  const getSkoutBtn = document.querySelector("#get-skout-btn");
  const loginBtn = document.querySelector("#login-btn");

  if (window.innerWidth < 1440) {
    if (this.scrollY <= 190) {
      logo.style.display = "block";
      logoDark.style.display = "none";
      menuIcon.style.fill = "#fff";
    } else {
      logo.style.display = "none";
      logoDark.style.display = "block";
      menuIcon.style.fill = "#7F7F7F";
    }
  } else {
    if (this.scrollY <= 450) {
      logo.style.display = "block";
      logoDark.style.display = "none";
      menu.style.color = "#fff";
      getSkoutBtn.style.color = "#fff";
      getSkoutBtn.style.borderColor = "#fff";
      loginBtn.style.color = "#fff";
      loginBtn.style.borderColor = "#fff";
    } else {
      logo.style.display = "none";
      logoDark.style.display = "block";
      menu.style.color = "#7F7F7F";
      getSkoutBtn.style.color = "#7F7F7F";
      getSkoutBtn.style.borderColor = "#7F7F7F";
      loginBtn.style.color = "#7F7F7F";
      loginBtn.style.borderColor = "#7F7F7F";
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
}

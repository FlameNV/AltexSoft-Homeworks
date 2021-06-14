// burger menu

const menu = document.getElementById("menu");
const header = document.getElementById("navigation");
const menuIcon = document.getElementById("menu-btn");
const links = document.getElementById("nav-links");

function toggleMenu() {
  links.classList.toggle("is-open");
  menuIcon.classList.toggle("is-clicked");
  document.body.classList.toggle("lock-scroll");
}

window.onscroll = () => {
  const logo = document.getElementById("logo");
  const getSkoutBtn = document.getElementById("get-skout-btn");
  const loginBtn = document.getElementById("login-btn");

  if (window.matchMedia("(max-width: 1023px)").matches) {
    if (window.scrollY) {
      logo.classList.add("is-scroll");
      menuIcon.classList.add("is-scroll");
      header.classList.add("is-scroll");
    } else {
      logo.classList.remove("is-scroll");
      menuIcon.classList.remove("is-scroll");
      header.classList.remove("is-scroll");
    }
  } else {
    if (window.scrollY) {
      logo.classList.add("is-scroll");
      header.classList.add("is-scroll");
      menu.classList.add("is-scroll");
      getSkoutBtn.classList.add("is-scroll");
      loginBtn.classList.add("is-scroll");
    } else {
      logo.classList.remove("is-scroll");
      header.classList.remove("is-scroll");
      menu.classList.remove("is-scroll");
      getSkoutBtn.classList.remove("is-scroll");
      loginBtn.classList.remove("is-scroll");
    }
  }
};

const navLinksLi = menu.getElementsByClassName("menu-item");

for (let i = 0; i < navLinksLi.length; i++) {
  navLinksLi[i].firstElementChild.addEventListener("click", function () {
    for (let j = 0; j < navLinksLi.length; j++) {
      navLinksLi[j].firstElementChild.classList.remove("active");
    }
    navLinksLi[i].firstElementChild.classList.add("active");
  });

  if (window.matchMedia("(max-width: 1023px)").matches) {
    navLinksLi[i].firstElementChild.addEventListener("click", function () {
      links.classList.remove("is-open");
      menuIcon.classList.remove("is-clicked");
      document.body.classList.remove("lock-scroll");
    });
  }
}

if (window.matchMedia("(max-width: 1023px)").matches) {
  const headerStyle = getComputedStyle(header);
  const headerHeight = headerStyle.height;

  links.style.top = headerHeight;
}

// slider

$(".solve-slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 30000,
  arrows: false,
});

$(".plans-slider").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows: false,
  centerMode: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },
  ],
});

$(".companies-slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 15000,
  arrows: false,
});

// hidden info

const cybersecuritySection = document.querySelector(".cybersecurity-section");
const icons = cybersecuritySection.querySelectorAll(".card-note-icon");
const hiddenInfo = cybersecuritySection.querySelectorAll(".hidden-info");

icons.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    hiddenInfo[index].style.display = "block";
  });
  el.addEventListener("mouseout", () => {
    hiddenInfo[index].style.display = "none";
  });
});
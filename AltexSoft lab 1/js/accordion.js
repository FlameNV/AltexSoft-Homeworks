let accordionBtn = document.getElementsByClassName("accordion-btn");
let i;

for (i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let accordion = this.nextElementSibling;
    if (accordion.style.display == "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
    } else {
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
    }
  });
}

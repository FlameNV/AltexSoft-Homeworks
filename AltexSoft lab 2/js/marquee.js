const icon = document.querySelectorAll(".card-note-icon");
const marquee = document.querySelectorAll('.marquee');

icon.forEach((el, index) => {
  el.addEventListener('mouseover', () => {
    marquee[index].style.display = 'block';
  });
  el.addEventListener('mouseout', () => {
    marquee[index].style.display = 'none';
  });
});
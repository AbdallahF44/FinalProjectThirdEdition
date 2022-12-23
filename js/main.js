let links = document.querySelectorAll(".con");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ch")) {
    // console.log(e.target);
  } else {
    links.forEach((e2) => {
      e2.classList.remove("active");
    });
    // console.log(e.target);
  }
});

// function toggleActive() {
  links.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("active");
      if (e.classList.contains("active")) {
        links.forEach((e2) => {
          e2.classList.remove("active");
        });
        e.classList.add("active");
      }
    });
  });
// }
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
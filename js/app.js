let header = document.getElementById("nav");
let links = header.getElementsByClassName("link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//scroll
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

//menu hamburgesa
addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      const navbar_ul = document.querySelector(".nav_ul");
      navbar_ul.classList.toggle("show");
    });
  }
});

//sweetalert
const Botons = document.querySelector(".botons");

Botons.addEventListener('click', () =>{
    swal("Good job!", "Successful login", "success");
})
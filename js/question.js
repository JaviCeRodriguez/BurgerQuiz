// Logica: Para no hacerla complicada, se puede hacer el quiz
// que la sus respuestas tengan un valor predeterminado. Segun el
// puntaje final, se obtiene una burga

function resultado() {
  let p1, p2, p3, nota;

  //! Primera pregunta
  if (document.getElementById("1sum1").checked == true) {
    p1 = 1;
  }
  if (document.getElementById("1sum5").checked == true) {
    p1 = 5;
  }
  if (document.getElementById("1sum10").checked == true) {
    p1 = 10;
  }

  //! Segunda pregunta
  if (document.getElementById("2sum1").checked == true) {
    p2 = 1;
  }
  if (document.getElementById("2sum5").checked == true) {
    p2 = 5;
  }
  if (document.getElementById("2sum10").checked == true) {
    p2 = 10;
  }

  //! Tercera pregunta
  if (document.getElementById("3sum1").checked == true) {
    p3 = 1;
  }
  if (document.getElementById("3sum5").checked == true) {
    p3 = 5;
  }
  if (document.getElementById("3sum10").checked == true) {
    p3 = 10;
  }

  nota = p1 + p2 + p3; //! Nota máxima: 30, dividimos en 5 burgas.

  let imgBurguer = document.getElementById("imagenBurguer");
  let newBurguer = new Image();
  newBurguer.onload = function () {
    imgBurguer.src = this.src;
  };

  //! Resultados
  if (nota < 5) {
    newBurguer.src = "./img/burguerQuiz/burguer1.jpg";
  }
  if (nota >= 5 && nota < 10) {
    newBurguer.src = "./img/burguerQuiz/burguer2.jpg";
  }
  if (nota >= 10 && nota < 15) {
    newBurguer.src = "./img/burguerQuiz/burguer3.jpg";
  }
  if (nota >= 15 && nota < 25) {
    newBurguer.src = "./img/burguerQuiz/burguer4.jpg";
  }
  if (nota >= 25 && nota <= 30) {
    newBurguer.src = "./img/burguerQuiz/burguer5.jpg";
  }
}

/*quiz*/
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// boton.addEventListener("click",function() {
//   window.history.back();
// }
// ,false);
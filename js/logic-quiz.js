// Logica: Para no hacerla complicada, se puede hacer el quiz
// que la sus respuestas tengan un valor predeterminado. Segun el
// puntaje final, se obtiene una burga

function resultado() {
    let p1, p2, p3, nota;
    var titleVar = ["1/4 de Libra", "Paltaburguer", "Cheextreme"]
    var priceVar = ["$80", "$349", "$499"]
    var subtitleVar = ["Cheese", "Avocado", "Monstrosity"]
    var descriptionVar =["A simple burger with a cut of cheese",
                        "Avocado flavored bread with sauteed vegetables",
                        "For the undecided: Chicken and beef monster burger, with extra cheese"]
  
    //! Primera pregunta
    if (document.getElementById("1sum1").checked == true){
        p1 = 1;
    }
    if (document.getElementById("1sum5").checked == true){
        p1 = 5;
    }
    if (document.getElementById("1sum10").checked == true){
        p1 = 10;
    }
  
    //! Segunda pregunta
    if (document.getElementById("2sum1").checked == true){
        p2 = 1;
    }
    if (document.getElementById("2sum5").checked == true){
        p2 = 5;
    }
    if (document.getElementById("2sum10").checked == true){
        p2 = 10;
    }
  
    //! Tercera pregunta
    if (document.getElementById("3sum1").checked == true){
        p3 = 1;
    }
    if (document.getElementById("3sum5").checked == true){
        p3 = 5;
    }
    if (document.getElementById("3sum10").checked == true){
        p3 = 10;
    }

    //! Nota máxima: 30, dividimos en 3 burgas.
    nota = p1 + p2 + p3;

    //! Oculto boton y muestro card
    document.getElementById("visibility1").style.display = "none";
    document.getElementById("visibility2").style.display = "flex";

    let imgBurguer = document.getElementById("imagenBurguer");
    let newBurguer = new Image();
    newBurguer.onload = function () {
        imgBurguer.src = this.src;
    };
  
    //! Resultados
    if (nota < 10){
        document.getElementById("title").innerHTML = titleVar[0];
        document.getElementById("price").innerHTML = priceVar[0];
        document.getElementById("subtitle").innerHTML = subtitleVar[0];
        document.getElementById("description").innerHTML = descriptionVar[0];
        newBurguer.src = "./img/burguerQuiz/burguer1.jpg";
    }
    if (nota >= 10 && nota < 20){
        document.getElementById("title").innerHTML = titleVar[1];
        document.getElementById("price").innerHTML = priceVar[1];
        document.getElementById("subtitle").innerHTML = subtitleVar[1];
        document.getElementById("description").innerHTML = descriptionVar[1];
        newBurguer.src = "./img/burguerQuiz/burguer3.jpg";
    }
    if (nota >= 20){
        document.getElementById("title").innerHTML = titleVar[2];
        document.getElementById("price").innerHTML = priceVar[2];
        document.getElementById("subtitle").innerHTML = subtitleVar[2];
        document.getElementById("description").innerHTML = descriptionVar[2];
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
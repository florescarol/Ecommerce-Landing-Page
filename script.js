// Carrossel de imagens

var numeroSlide = 1;
mostrarSlide(numeroSlide);

function mostrarSlide(x) {
    var slides = document.getElementsByClassName("slide");
    if (x > slides.length) {numeroSlide = 1}
    if (x < 1) {numeroSlide = slides.length}

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[numeroSlide-1].style.display = "block";
}

function mudarSlide(x) {
    mostrarSlide(numeroSlide += x);
}


// Relógio countdown

const dataBlackFriday = new Date("Nov 26, 2021 00:00:00").getTime();

function clock() {
    var agora = new Date().getTime();
    var tempoSobrando =dataBlackFriday - agora;
    
    var dias = Math.floor(tempoSobrando / (1000 * 60 * 60 * 24));
    var horas = Math.floor((tempoSobrando % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((tempoSobrando % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((tempoSobrando % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    if (tempoSobrando < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Tempo esgotado.";
}
}

clock();
var x = setInterval(clock, 1000);

// armazenamento dos dados do input no local storage

var email = document.getElementById("email");
var nome = document.getElementById("nome");

nome.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        email.focus();
    }
});

email.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("btn-enviar").click();
    }
});

var i = 1;

function loading() {
    document.getElementById("form").style.display = "none";
    document.getElementById("nome").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("termos").style.display = "none";
    document.getElementById("btn-enviar").style.display = "none";
    document.getElementById("loading").style.display = "flex";
}

function check() {
    var input = [];
    input[0] = document.getElementById("nome").value;
    input[1] = document.getElementById("email").value;

    var checkbox = document.getElementById("checkbox");
    
    var message = "";
    
    loading();
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";

        if (input[0] == "" && input[1] ==""){
            message = "Campos inválidos. Complete corretamente"
            document.getElementById("btn-reiniciar").style.display = "block";
        }
        else if (input[0] == "") {
            message = "Nome inválido. Complete corretamente"
            document.getElementById("btn-reiniciar").style.display = "block";
        }
        else if (input[1] == "") {
            message = "Email inválido. Complete corretamente"
            document.getElementById("btn-reiniciar").style.display = "block";
        }
        else if (checkbox.checked == false) {
            message = "Aceite os termos."
            document.getElementById("btn-reiniciar").style.display = "block";
        }
        else {
            message = input[0] + ", te adicionamos à nossa newsletter!"
            document.getElementById("btn-novamente").style.display = "block";
            localStorage.setItem("email" + i, input[0]);
            localStorage.setItem("nome" + i, input[1])
            i = i + 1;
        }
        
        document.getElementById("mensagem").style.display = "flex";
        document.getElementById("mensagem").innerHTML = message;
        document.getElementById("email").value = "";
        document.getElementById("nome").value = "";
        checkbox.checked = false;
    }, 2000);
}

function reiniciar () {
    document.getElementById("form").style.display = "block";
    document.getElementById("nome").style.display = "flex";
    document.getElementById("email").style.display = "flex";
    document.getElementById("termos").style.display = "flex";
    document.getElementById("btn-enviar").style.display = "block";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("btn-novamente").style.display = "none";
}
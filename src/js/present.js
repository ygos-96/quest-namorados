const botaoNota = document.getElementById("btn-note");
const nota = document.getElementById("note");
const sessaoCarta = document.querySelector(".letter");
const imgCarta = document.getElementById("letter");

const validaNota = () => {
    if (nota.value >= 6) {
        nota.classList.add("checked");
        sessaoCarta.style.display = "block";
        botaoNota.textContent = "🎉"
    } else {
        nota.classList.remove("checked");
        nota.classList.add("error");
        botaoNota.textContent = "❌"
        sessaoCarta.style.display = "none";
    }
};

botaoNota.addEventListener("click", (e) => {
    e.preventDefault();
    validaNota();
});

function letterOpen() {
    imgCarta.src = "./src/image/carta-aberta.png";
}

function letterClose() {
    imgCarta.src = "./src/image/carta-fechada.png";
}

imgCarta.addEventListener("mouseover", letterOpen);
imgCarta.addEventListener("mouseleave", letterClose);

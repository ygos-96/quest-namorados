const formulario = document.querySelectorAll(".input");
const botaoFormulario = document.getElementById("btn-submit");
const spanRequired = document.querySelectorAll(".required-field");

const botaoQuestOne = document.getElementById("btn-1");
const questOne = document.getElementById("quest-one");

const questTwo = document.getElementById("quest-two");
const botaoQuestTwo = document.getElementById("btn-2");
const silvio = document.querySelector(".silvio");

const questThree = document.getElementById("quest-three");
const botaoQuestThree = document.getElementById("btn-3");

const questFor = document.getElementById("quest-for");
const botaoQuestFor = document.getElementById("btn-4");

const questFive = document.getElementById("quest-five");
const botaoQuestFive = document.getElementById("btn-5");

botaoFormulario.addEventListener("click", (e) => {
    e.preventDefault();

    formulario.forEach((input) => {
        if (!input.value) {
            input.classList.remove("checked");
            input.classList.add("error");
            input.nextElementSibling.style.display = "block";
        } else if (input.value != "") {
            window.location.href = "present.html";
        }
    });
});

const validaQuestOne = () => {
    if (questOne.value == "Epi.16 T3" || questOne.value == "c") {
        questOne.classList.add("checked");
        botaoQuestOne.textContent = "+2";
    } else if (questOne.value != "comida japonesa") {
        questOne.classList.remove("checked");
        questOne.classList.add("error");
        botaoQuestOne.textContent = "❌";
        window.open(
            "https://www.youtube.com/watch?v=Tj22954X46E&ab_channel=Mememaster",
            "_blank"
        );
    }
};

botaoQuestOne.addEventListener("click", (e) => {
    e.preventDefault();
    validaQuestOne();
});

const validaQuestTwo = () => {
    if (questTwo.value == "comida japonesa" || questTwo.value == "a") {
        setTimeout(() => {
            silvio.style.display = "block";
        }, 0);
        setTimeout(() => {
            window.open(
                "https://www.youtube.com/watch?v=qnDulVMKLls&ab_channel=TiagoBacin",
                "_blank"
            );
        }, 3500);
        setTimeout(() => {
            questTwo.classList.add("checked");
            botaoQuestTwo.textContent = "+2";
            silvio.style.display = "none";
        }, 4000);
    } else if (questTwo.value != "comida japonesa" || questTwo.value != "a") {
        questTwo.classList.remove("checked");
        questTwo.classList.add("error");
        botaoQuestTwo.textContent = "❌";
    }
};

botaoQuestTwo.addEventListener("click", (e) => {
    e.preventDefault();
    validaQuestTwo();
});

const validaQuestThree = () => {
    if (questThree.value == "L - Death Note" || questThree.value == "b") {
        questThree.classList.add("checked");
        botaoQuestThree.textContent = "+2";
    } else if (
        questThree.value != "L - Death Note" ||
        questThree.value != "b"
    ) {
        questThree.classList.remove("checked");
        questThree.classList.add("error");
        botaoQuestThree.textContent = "❌";
    }
};

botaoQuestThree.addEventListener("click", (e) => {
    e.preventDefault();
    validaQuestThree();
});

const validaQuestFor = () => {
    if (questFor.value == "fio do taiaio") {
        questFor.classList.add("checked");
        botaoQuestFor.textContent = "+2";
    } else if (questFor.value != "fio do taiaio") {
        questFor.classList.remove("checked");
        questFor.classList.add("error");
        setTimeout(() => {
            window.open("https://www.youtube.com/shorts/tR1mF8uXcrg", "_blank");
        }, 1500);
        botaoQuestFor.textContent = "❌";
    }
};

botaoQuestFor.addEventListener("click", (e) => {
    e.preventDefault();
    validaQuestFor();
});

const validaQuestFive = () => {
    if (questFive.value == "é um real" || questFive.value == "d") {
        questFive.classList.add("checked");
        botaoQuestFive.textContent = "+2";
    } else if (questFive.value != "é um real" || questFive.value == "d") {
        questFive.classList.remove("checked");
        questFive.classList.add("error");
        botaoQuestFive.textContent = "❌";
    }
};

botaoQuestFive.addEventListener("click", (e) => {
    e.preventDefault();
    validaQuestFive();
});

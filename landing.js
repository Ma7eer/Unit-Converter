let btnAll = document.querySelectorAll(".btn"),
    btnTop = document.querySelector("#btn-top"),
    btnBot = document.querySelector("#btn-bot"),
    containerTop = document.querySelector(".container-top"),
    containerBot = document.querySelector(".container-bot"),
    fontAwesomeIcon = document.querySelectorAll(".my-icon");

// When button gets clicked then show inputs and hide buttons
btnTop.addEventListener("click", () => {
    for (let i = 0; i < btnAll.length; i++) {
        btnAll[i].style.display = 'none';
    }
    containerTop.style.display = 'flex';
})

btnBot.addEventListener("click", () => {
    for (let i = 0; i < btnAll.length; i++) {
        btnAll[i].style.display = 'none';
    }
    containerBot.style.display = 'flex';
})

for (let j=0; j < fontAwesomeIcon.length; j++) {
    fontAwesomeIcon[j].addEventListener("click", () => {
        containerBot.style.display  = 'none';
        containerTop.style.display  = 'none';
        for (let i = 0; i < btnAll.length; i++) {
            btnAll[i].style.display = 'flex';
        }
    })
}

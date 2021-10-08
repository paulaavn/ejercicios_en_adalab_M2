'use strict';

const teacherIsra = document.querySelector(".teacher--isra");
const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherNasi = document.querySelector(".teacher--nasi")
const favorite = document.querySelector(".favorite")

function handleFavorite(event) {
    const favoriteTeacher = event.currentTarget;
    favoriteTeacher.classList.toggle("teacher--selected");
    if (event.currentTarget.querySelector(".favorite").innerHTML === "Añadir") {
        const addClass = event.currentTarget.querySelector(".favorite").innerHTML.replace("Añadir", "Quitar");
        event.currentTarget.querySelector(".favorite").innerHTML = addClass;
    } else {
        const removeClass = event.currentTarget.querySelector(".favorite").innerHTML.replace("Quitar", "Añadir");
        event.currentTarget.querySelector(".favorite").innerHTML = removeClass;
    }
    console.log(event.currentTarget);
    console.log(event.target);
}


teacherIsra.addEventListener("click", handleFavorite);
teacherTuerto.addEventListener("click", handleFavorite);
teacherNasi.addEventListener("click", handleFavorite);






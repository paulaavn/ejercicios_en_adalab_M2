'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector(".js_button");
const moviesList = document.querySelector(".js_list");

function paintMoviesList() {
    moviesList.innerHTML = `<li class="inception_movie">${inception}</li>
    <li class="tbe_movie">${theButterFlyEffect}</li>
    <li class="essm_movie">${eternalSunshineOfTheSM}</li>
    <li class="bv_movie">${blueVelvet}</li>
    <li class="split_movie">${split}</li>`;

    const inceptionMovie = document.querySelector(".inception_movie");
    const theButterFlyEffectMovie = document.querySelector(".tbe_movie");
    const eternalSunshineOfTheSMMovie = document.querySelector(".essm_movie");
    const blueVelvetMovie = document.querySelector(".bv_movie");
    const splitMovie = document.querySelector(".split_movie");

    function handleClick(event) {
        console.log(event.currentTarget.innerHTML);
    }

    inceptionMovie.addEventListener("click", handleClick);
    theButterFlyEffectMovie.addEventListener("click", handleClick);
    eternalSunshineOfTheSMMovie.addEventListener("click", handleClick);
    blueVelvetMovie.addEventListener("click", handleClick);
    splitMovie.addEventListener("click", handleClick);

}



button.addEventListener("click", paintMoviesList);
'use strict';

const button = document.querySelector(".js_submit");
const movie1 = document.querySelector(".js_input1");
const movie2 = document.querySelector(".js_input2");
const answer = document.querySelector(".js_answer");

const handleMovie = (event) => {
    event.preventDefault();
    const movies = [];
    movies[0] = movie1.value;
    movies[1] = movie2.value;
    for (const movie of movies) {
        answer.innerHTML += `¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`
    }

};


button.addEventListener("click", handleMovie);


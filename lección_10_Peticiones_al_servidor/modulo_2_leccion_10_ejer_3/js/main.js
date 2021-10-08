'use strict';


function getUser() {
    const username = document.querySelector(".js_input").value;

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {

            document.querySelector(".js_name").innerHTML = `Username: ${data.login}`;

            document.querySelector(".js_numberOfRepos").innerHTML = `El usuario ha publicado ${data.public_repos} repositorios`;

            document.querySelector(".js_image").src = data.avatar_url;
        });

}

const btn = document.querySelector(".js_button");
btn.addEventListener('click', getUser);

//nombre
// numero repos
//imagen






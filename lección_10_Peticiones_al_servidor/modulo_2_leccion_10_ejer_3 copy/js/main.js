'use strict';


function getOrganization() {
    const orgname = document.querySelector(".js_input").value;

    fetch(`https://api.github.com/orgs/${orgname}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".js_orgName").innerHTML = `Organization name: ${data.name}`;
            return fetch("https://api.github.com/orgs/github/repos")
        })
        .then(RepoResponse => RepoResponse.json())
        .then(repoData => {
            for (const repo of repoData) {
                document.querySelector(".js_list").innerHTML += `<li>${repo.name}</li>`;
            };
        });
};

const btn = document.querySelector(".js_button");
btn.addEventListener('click', getOrganization);







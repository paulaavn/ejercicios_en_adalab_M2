'use strict';

const tasksNumber = document.querySelector(".js_title");
const taskList = document.querySelector(".js_list");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

tasksNumber.innerHTML = `Tienes ${tasks.length} tareas pendientes`


// function paintList() {
//     for (const task of tasks) {
//         if (task.completed === true) {
//             taskList.innerHTML += `<li class="js_task completed-task">${task.name}</li>`;
//         } else {
//             taskList.innerHTML += `<li class="js_task">${task.name}</li>`;
//         }

//     };
// };

// paintList()

const liList = document.querySelectorAll(".js_task");


function addCheckbox() {
    for (const task of tasks) {
        if (task.completed === true) {
            taskList.innerHTML += `<input type="checkbox"> <li class="task js_task completed-task">${task.name}</li> `;
        } else {
            taskList.innerHTML += `<input type="checkbox"> <li class="task js_task">${task.name}</li> `;
        }
    }
}

addCheckbox()
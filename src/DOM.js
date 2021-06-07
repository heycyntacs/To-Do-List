import { projects } from './logic'

//PROJECT-RELATED FUNCTIONS

function showProjectForm () {
    const button = document.querySelector('#add-project')
    .addEventListener('click', () => {
        const form = document.querySelector('.project-form');
        if (form.style.display === 'none') form.style.display = 'flex';
        else form.style.display = 'none';
    });
}

function showProjects () {
    const projectsDiv = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const project = document.createElement('div');
        project.classList.add(`project`);
        project.dataset.value = `${i}`;
        project.textContent = projects[i].title;
        projectsDiv.appendChild(project);
    }
}

function selectProject () {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', showTasks);
    });
}

function projectsResetter () {
    const projects = document.querySelector('.projects');
    projects.innerHTML = '';
}

//TASK-RELATED FUNCTIONS

function showTaskForm () {
    const button = document.querySelector('#add-task')
    .addEventListener('click', () => {
        const form = document.querySelector('.task-form');
        if (form.style.display === 'none') form.style.display = 'flex';
        else form.style.display = 'none';
    });
}

function showTasks () {
    const tasks = document.querySelector('.task-container');
    for (let i = 0; i < projects.length; i++) {
        const task = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = projects[i].tasks.title;

        tasks.appendChild(task);
        task.appendChild(title);
    }
}




//Project Exports
export { showProjectForm, showProjects, projectsResetter };

//Task Exports
export { showTaskForm, selectProject };
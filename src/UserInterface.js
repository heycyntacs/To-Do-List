import { projects } from './Project'
import { setLocalStorage } from './Storage';
import { selectProject } from './buttonListeners';

//PROJECT-RELATED FUNCTIONS

let projectID = 0;

function showProjectForm() {
    const form = document.querySelector('.project-form');
    if (!form.style.display || form.style.display === 'none') form.style.display = 'flex';
    else form.style.display = 'none';
}

function showProjects() {
    if (projects.length === 0) {
        projectsResetter();
        return;
    }
    projectsResetter();
    const projectsDiv = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const project = document.createElement('div');
        project.classList.add(`project`);
        project.dataset.value = `${i}`;

        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = projects[i].title;

        const remover = document.createElement('span');
        remover.classList.add('project-remover');
        remover.dataset.index = i;
        remover.textContent = 'X';

        projectsDiv.appendChild(project);
        project.appendChild(remover);
        project.appendChild(projectTitle);
    }
}

function removeProject(e) {
    projects.splice(e.target.dataset.index, 1);
    console.log(projects);
    setLocalStorage();
    showProjects();
    selectProject();
    if (projects.length === 0) {
        taskResetter();
    };
}

function projectsResetter() {
    document.querySelector('.projects').innerHTML = '';
}

function projectColorResetter (project) {
    project.style.background = null;
}

//TASK-RELATED FUNCTIONS

function showTaskForm() {
    if (!projects[0]) {
        alert('Add a Project First.');
        return;
    }
    const form = document.querySelector('.task-form');
    const main = document.querySelector('main');
    if (!form.style.display || form.style.display === 'none') {
        form.style.display = 'flex';
        main.style.filter = 'brightness(50%)';
        main.style.pointerEvents = 'none';
    }
    else {
        form.style.display = 'none';
        main.style.filter = 'brightness(100%)';
    }
}

function cancelTaskForm() {
    const form = document.querySelector('.task-form');
    const main = document.querySelector('main');
    form.style.display = 'none';
    main.style.filter = 'brightness(100%)';
    main.style.pointerEvents = 'auto';
}

function hideTaskForm() {
    const form = document.querySelector('.task-form');
    const main = document.querySelector('main');
    const title = document.querySelector('#task-title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#due-date');

    form.style.display = 'none';
    main.style.filter = 'brightness(100%)';
    main.style.pointerEvents = 'auto';
    title.value = null;
    description.value = null;
    dueDate.value = null;
}

function showTasks(id) {
    if (projects.length === 0 || projects[id].tasks.length === 0) {
        taskResetter();
        return;
    }
    taskResetter();
    const tasks = document.querySelector('.task-container');
    for (let i = 0; i < projects[id].tasks.length; i++) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.dataset.index = i;

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        const remover = document.createElement('span');
        remover.classList.add('task-remover');
        remover.dataset.index = i;
        remover.textContent = 'X';

        const title = document.createElement('h3');
        title.textContent = projects[id].tasks[i].title;

        const dueDate = document.createElement('p');
        dueDate.textContent = `Due Date: ${projects[id].tasks[i].dueDate}`;

        tasks.appendChild(task);
        task.appendChild(titleContainer);
        titleContainer.appendChild(remover);
        titleContainer.appendChild(title);
        task.appendChild(dueDate);
    }
}

function showTaskDetails() {
    
}

function priorityChecker() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        
    })
    
    /* 
    const priority = document.querySelector('#priority');
    if (priority.selectedIndex === 0) task.style.backgroundColor = 'rgb(252, 71, 71)';
    else if (priority.selectedIndex === 1) task.style.backgroundColor = 'rgb(241, 182, 71)';
    else {
    task.style.backgroundColor = 'rgb(238, 238, 81)';
    title.style.color = 'rgb(27, 27, 34)';
    dueDate.style.color = 'rgb(27, 27, 34)';
    }
    */
}

function removeTask(e) {
    projects[projectID].tasks.splice([parseInt(e.target.dataset.index)], 1);
    setLocalStorage();
    showTasks(projectID);
}

function taskResetter() {
    document.querySelector('.task-container').innerHTML = '';
}

//Project Exports
export { showProjectForm, showProjects, removeProject, projectID };

//Task Exports
export { showTaskForm, cancelTaskForm, hideTaskForm, showTasks, removeTask};


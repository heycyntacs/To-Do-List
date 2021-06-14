import { projects } from './Project'
import { setLocalStorage } from './Storage';
import { selectProject } from './eventListeners';

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

function selectNewProject() {
    selectProject();
    const projectsDiv = document.querySelectorAll('.project');
    if (projectsDiv.length === 0) return;
    for (let i = 0; i < projectsDiv.length; i++) {
        projectsDiv[i].classList.remove('active-project');
    }
    projectID = parseInt(projectsDiv[projectsDiv.length - 1].dataset.value);
    showTasks(projectID);
    projectsDiv[projectsDiv.length - 1].classList.add('active-project');
}

function removeProject(e) {
    projects.splice(e.target.dataset.index, 1);
    setLocalStorage();
    showProjects();
    selectNewProject();
    if (projects.length === 0) {
        taskResetter();
    };
}

function projectsResetter() {
    document.querySelector('.projects').innerHTML = '';
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

        const leftContainer = document.createElement('div');
        leftContainer.classList.add('left-container');

        const remover = document.createElement('span');
        remover.classList.add('task-remover');
        remover.dataset.index = i;
        remover.textContent = 'X';

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        const title = document.createElement('h3');
        title.classList.add('task-title');
        title.dataset.index = i;
        title.textContent = projects[id].tasks[i].title;
        title.style.color = 'rgb(27, 27, 34)';

        const titleEditor = document.createElement('input');
        titleEditor.classList.add('task-title-editor');
        titleEditor.type = 'text';
        titleEditor.value = `${title.textContent}`;
        titleEditor.maxLength = '30';
        
        const description = document.createElement('p');
        description.classList.add('task-description');
        description.dataset.index = i;
        description.textContent = projects[id].tasks[i].description;
        description.style.color = 'rgb(27, 27, 34)';

        const descriptionEditor = document.createElement('input');
        descriptionEditor.classList.add('task-description-editor');
        descriptionEditor.type = 'text';
        descriptionEditor.value = `${description.textContent}`;
        descriptionEditor.maxLength = '40';

        const dueDate = document.createElement('h4');
        dueDate.classList.add('task-due-date');
        dueDate.dataset.index = i;
        dueDate.textContent = `Due Date: ${projects[id].tasks[i].dueDate}`;
        dueDate.style.color = 'rgb(27, 27, 34)';

        const dueDateEditor = document.createElement('input');
        dueDateEditor.classList.add('task-due-date-editor');
        dueDateEditor.type = 'date';
        dueDateEditor.value = `${dueDate.textContent}`;

        const priorities = document.createElement('div');
        priorities.dataset.index = i;
        priorities.classList.add('task-priority-editor');

        const high = document.createElement('div');
        high.classList.add('High')

        const medium = document.createElement('div');
        medium.classList.add('Medium')

        const low = document.createElement('div');
        low.classList.add('Low')


        tasks.appendChild(task);
        task.appendChild(leftContainer);
        leftContainer.appendChild(remover);
        leftContainer.appendChild(titleContainer);
        titleContainer.appendChild(title);
        titleContainer.appendChild(titleEditor);
        task.appendChild(description);
        task.appendChild(descriptionEditor);
        task.appendChild(dueDate);
        task.appendChild(dueDateEditor);
        task.appendChild(priorities);
        priorities.appendChild(high);
        priorities.appendChild(medium);
        priorities.appendChild(low);
    }
    priorityChecker();
}

function priorityChecker() {
    const tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if (projects[projectID].tasks[i].priority === 'High') {
            tasks[i].style.background = 'rgb(252, 71, 71)';
            tasks[i].dataset.priority = 'High';
        }
        else if (projects[projectID].tasks[i].priority === 'Medium') {
            tasks[i].style.background = 'rgb(241, 182, 71)';
            tasks[i].dataset.priority = 'Medium';
        }
        else {
            tasks[i].style.background = 'rgb(238, 238, 81)';
            tasks[i].dataset.priority = 'Low';
        }
    }
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
export { showProjectForm, showProjects, selectNewProject, removeProject, projectID };

//Task Exports
export { showTaskForm, cancelTaskForm, hideTaskForm, showTasks, removeTask};


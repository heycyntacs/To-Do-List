import { projects } from './logic'

//PROJECT-RELATED FUNCTIONS

function showProjectForm() {
    const button = document.querySelector('#add-project');
    button.addEventListener('click', () => {
        const form = document.querySelector('.project-form');
        if (!form.style.display || form.style.display === 'none') form.style.display = 'flex';
        else form.style.display = 'none';
    });
}

function showProjects() {
    const projectsDiv = document.querySelector('.projects');
    for (let i = 0; i < projects.length; i++) {
        const project = document.createElement('div');
        project.classList.add(`project`);
        project.dataset.value = `${i}`;
        project.textContent = projects[i].title;
        projectsDiv.appendChild(project);
    }
}

function selectProject() {
    const projectsDiv = document.querySelectorAll('.project');
    projectsDiv.forEach(project => {
        project.addEventListener('click', () => {
            showTasks(parseInt(project.dataset.value));
        } );
    });
}

function projectsResetter() {
    document.querySelector('.projects').innerHTML = '';
}

//TASK-RELATED FUNCTIONS

function showTaskForm() {
    const button = document.querySelector('#add-task-button');
    button.addEventListener('click', () => {
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
    });
}

function cancelTaskForm() {
    const button = document.querySelector('#cancel-form');
    button.addEventListener('click', () => {
        const form = document.querySelector('.task-form');
        const main = document.querySelector('main');
        form.style.display = 'none';
        main.style.filter = 'brightness(100%)';
        main.style.pointerEvents = 'auto';
    })
}

function hideTaskForm() {
    const form = document.querySelector('.task-form');
    const main = document.querySelector('main');
    form.style.display = 'none';
    main.style.filter = 'brightness(100%)';
    main.style.pointerEvents = 'auto';
}

function showTasks(dataValue) {
    if (!projects[dataValue].tasks[0]) {
        taskResetter();
        return;
    }
    taskResetter();
    const tasks = document.querySelector('.task-container');
    for (let i = 0; i < projects[dataValue].tasks.length; i++) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.dataset.value = `${i}`;

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        const checkbox = document.createElement('input');
        checkbox.id = 'checkbox';
        checkbox.type = 'checkbox';

        const title = document.createElement('h3');
        title.textContent = projects[dataValue].tasks[i].title;

        const dueDate = document.createElement('p');
        dueDate.textContent = `Due Date: ${projects[dataValue].tasks[i].dueDate}`;

        
        tasks.appendChild(task);
        task.appendChild(titleContainer);
        titleContainer.appendChild(checkbox);
        titleContainer.appendChild(title);
        task.appendChild(dueDate);
    }
}

function taskResetter() {
    document.querySelector('.task-container').innerHTML = '';
}

//Project Exports
export { showProjectForm, showProjects, projectsResetter, selectProject };

//Task Exports
export { showTaskForm, cancelTaskForm, hideTaskForm, showTasks };
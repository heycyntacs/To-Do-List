import { showProjects, projectsResetter, selectProject } from "./DOM";

let projects = [];

class Project {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }

    addTaskToProject (task) {
        this.tasks.push(task);
    }
}

class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function addProject () {
    const form = document.querySelector('.project-form');
    const title = document.querySelector('#project-title');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const project = new Project (title.value);
        projects.push(project);
        console.log(projects);
        title.value = null;
        form.style.display = 'none';

        projectsResetter();
        showProjects();
        selectProject();
    });
}

function addTask () {
    const form = document.querySelector('.task-form');
    const title = document.querySelector('#task-title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const task = new Task (title.value, description.value, dueDate.value, priority.value);
    });
}


export { projects, addProject, addTask };
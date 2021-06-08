import { showProjects, projectsResetter, selectProject, hideTaskForm } from "./DOM";

let projects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    addTaskToProject(task) {
        this.tasks.push(task);
    }
}

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

//ADD TODOS

function addProject() {
    const form = document.querySelector('.project-form');
    const title = document.querySelector('#project-title');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const project = new Project (title.value);
        projects.push(project);
        title.value = null;
        form.style.display = 'none';

        projectsResetter();
        showProjects();
        selectProject();

        addTask(project)
    });
}

function addTask(project) {
    const addTask = document.querySelector('#add-task-form');
    const title = document.querySelector('#task-title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');

    addTask.addEventListener('click', () => {
        let priorityValue;
        if (priority.selectedIndex === 0) priorityValue = 'High';
        else if (priority.selectedIndex === 1) priorityValue = 'Medium';
        else priorityValue = 'Low';
        const task = new Task (title.value, description.value, dueDate.value, priorityValue);
        project.addTaskToProject(task);
        console.log(projects);
        hideTaskForm();
    });
}

//TODOS EXPORTS
export { projects, Project, Task }

//ADD FUNCTION EXPORTS
export { addProject, addTask }
import { showProjects, hideTaskForm, projectID, showTasks, taskResetter, selectLastProject } from './UserInterface';
import { Project, projects } from './Project';
import Task from './Task';
import { setLocalStorage } from './Storage';

function addProject() {
    const form = document.querySelector('.project-form');
    const title = document.querySelector('#project-title');

    if (title.value === '') {
        alert('Project cannot be blank.');
        return;
    }

    // Check for same project name
    for (let i = 0; i < projects.length; i++) {
        if (title.value === projects[i].title) {
            alert('Project already exists.');
            return;
        }
    }

    const project = new Project(title.value);
    projects.push(project);
    for (let i = 0; i < projects.length; i++) {
        project.addID(i);
    }
    title.value = null;
    form.style.display = 'none';

    showProjects();
    setLocalStorage();
    selectLastProject();
}

function removeProject(e) {
    projects.splice(e.target.dataset.index, 1);
    showProjects();
    selectLastProject();
    if (projects.length === 0) {
        taskResetter();
    }
    setLocalStorage();
}

function addTask() {
    const title = document.querySelector('#task-title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');

    // Checks if Form is Filled up
    if (title.value === '' || description.value === '' || dueDate.value === '') {
        alert('Fill up the whole form.');
        return;
    }

    let priorityValue;
    if (priority.selectedIndex === 0) priorityValue = 'High';
    else if (priority.selectedIndex === 1) priorityValue = 'Medium';
    else priorityValue = 'Low';

    const task = new Task(title.value, description.value, dueDate.value, priorityValue);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === projectID) {
            projects[projectID].tasks.push(task);
            break;
        }
    }
    hideTaskForm();
    showTasks(projectID);
    setLocalStorage();
}

function removeTask(e) {
    projects[projectID].tasks.splice([parseInt(e.target.dataset.index, 10)], 1);
    showTasks(projectID);
    setLocalStorage();
}

export { addProject, removeProject, addTask, removeTask };

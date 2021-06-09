import { showProjects, selectProject, hideTaskForm, projectID, showTasks } from "./UserInterface";
import { Project, projects } from './Project';
import Task from './Task';

function addProject() {
    const form = document.querySelector('.project-form');
    const title = document.querySelector('#project-title');

    //Check for same project name
    for (let i = 0; i < projects.length; i++) {
        if (title.value === projects[i].title) {
            alert('Project already exists');
            return;
        }
    }

    const project = new Project (title.value);
    projects.push(project);
    for (let i = 0; i < projects.length; i++) {
        project.addID(i);
    }
    title.value = null;
    form.style.display = 'none';

    showProjects();
    selectProject();
}

function addTask() {
    const title = document.querySelector('#task-title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    
    //Checks if Form is Filled up
    if (title.value === '' || description.value === '' || dueDate.value === '') {
        alert('Fill up the whole form.');
        return;
    }

    let priorityValue;
    if (priority.selectedIndex === 0) priorityValue = 'High';
    else if (priority.selectedIndex === 1) priorityValue = 'Medium';
    else priorityValue = 'Low';

    const task = new Task (title.value, description.value, dueDate.value, priorityValue);
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === projectID) {
            projects[i].tasks.push(task);
            break;
        }
    }
    hideTaskForm();
    showTasks(projectID);
}

export { addProject, addTask }
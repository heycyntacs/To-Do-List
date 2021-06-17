import { projects } from './Project';
import { projectID, showProjects, showTasks } from './UserInterface';

function setLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function retrieveLocalStorage() {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (!projects) projects = [];
    showProjects();
    showTasks(projectID);
}

export { setLocalStorage, retrieveLocalStorage };

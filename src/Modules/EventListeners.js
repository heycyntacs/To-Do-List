import { addProject, addTask } from './AddTodos';
// PROJECT IMPORTS
import { showProjectForm, removeProject, projectID, selectNewProject } from './UserInterface';
// TASK IMPORTS
import { showTaskForm, cancelTaskForm, showTasks, removeTask } from './UserInterface';
// EDIT TASK DETAILS IMPORT
import { editTaskTitle, editTaskDescription, editTaskDueDate, editTaskPriority } from './TaskEditor';

import { setLocalStorage } from './Storage';

function buttonListeners() {
    window.addEventListener('click', (e) => {
        if (e.target.id === 'show-project-form') showProjectForm();
        else if (e.target.id === 'add-project') {
            addProject();
            selectNewProject();
            selectProject();
            setLocalStorage();
        }
        else if (e.target.className === 'project-remover') {
            removeProject(e);
            setLocalStorage();
        }
        else if (e.target.id === 'add-task-button') showTaskForm();
        else if (e.target.id === 'add-task-form') {
            addTask();
            setLocalStorage();
        }
        else if (e.target.classList.contains('task-title')) {
            editTaskTitle(e);
            setLocalStorage();
        }
        else if (e.target.classList.contains('task-description')) {
            editTaskDescription(e);
            setLocalStorage();
        }
        else if (e.target.classList.contains('task-due-date')) {
            editTaskDueDate(e);
            setLocalStorage();
        }
        else if (e.target.classList.contains('task')) {
            editTaskPriority(e);
            setLocalStorage();
        }
        else if (e.target.className === 'task-remover') {
            removeTask(e);
            setLocalStorage();
        }
        else if (e.target.id === 'cancel-form') cancelTaskForm();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') e.preventDefault();
    });

    document.querySelector('#project-title').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addProject();
        }
    });
}

function selectProject() {
    const projectsDiv = document.querySelectorAll('.project');
    for (let i = 0; i < projectsDiv.length; i++) {
        projectsDiv[i].addEventListener('click', () => {
            projectID = parseInt(projectsDiv[i].dataset.value, 10);
            showTasks(projectID);
            for (let i = 0; i < projectsDiv.length; i++) {
                projectsDiv[i].classList.remove('active-project');
            }
            projectsDiv[i].classList.add('active-project');
        });
    }
    if (projectsDiv.length === 0) return;
    projectID = parseInt(projectsDiv[0].dataset.value, 10);
    showTasks(projectID);
    projectsDiv[0].classList.add('active-project');
}

export { buttonListeners, selectProject };

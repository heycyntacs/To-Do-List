import { addProject, removeProject, addTask, removeTask } from './ToDos';
// PROJECT IMPORTS
import { showProjectForm, projectID,
// TASK IMPORTS
        showTaskForm, cancelTaskForm, showTasks } from './UserInterface';
// EDIT TASK DETAILS IMPORT
import { editTaskTitle, editTaskDescription, editTaskDueDate, editTaskPriority } from './TaskEditor';

function buttonListeners() {
    window.addEventListener('click', (e) => {
        // Project Event Listeners
        if (e.target.id === 'show-project-form') showProjectForm();
        else if (e.target.id === 'add-project') {
            addProject();
            selectProject();
        }
        else if (e.target.className === 'project-remover') {
            removeProject(e);
            selectProject();
        }

        // Task Event Listeners
        else if (e.target.id === 'add-task-button') showTaskForm();
        else if (e.target.id === 'add-task-form') addTask();
        else if (e.target.classList.contains('task-title')) editTaskTitle(e);
        else if (e.target.classList.contains('task-description')) editTaskDescription(e);
        else if (e.target.classList.contains('task-due-date')) editTaskDueDate(e);
        else if (e.target.classList.contains('task')) editTaskPriority(e);
        else if (e.target.className === 'task-remover') removeTask(e);
        else if (e.target.id === 'cancel-form') cancelTaskForm();
    });

    // Keyboard Support for Adding Projects
    document.querySelector('#project-title').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addProject();
            selectProject();
        }
    });

    // Prevent Forms from Being Submitted
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') e.preventDefault();
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
}

export { buttonListeners, selectProject };

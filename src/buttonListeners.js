import { addProject, addTask } from "./AddTodos";
import { cancelTaskForm, removeTask, showTaskForm, showProjectForm, removeProject, projectID, showTasks } from "./UserInterface";

function buttonListeners () {
    window.addEventListener('click', e => {
        if (e.target.id === 'show-project-form') showProjectForm();
        else if (e.target.id === 'add-project') addProject();
        else if (e.target.className === 'project-remover') removeProject(e);
        else if (e.target.id === 'add-task-button') showTaskForm();
        else if (e.target.id === 'add-task-form') addTask();
        else if (e.target.className === 'task-remover') removeTask(e);
        else if (e.target.id === 'cancel-form') cancelTaskForm();
    });
    window.addEventListener('keydown', e => {
        if (e.key === 'Enter') e.preventDefault();
    });
}

function selectProject() {
    const projectsDiv = document.querySelectorAll('.project');
    projectsDiv.forEach(project => {
        project.addEventListener('click', () => {
            projectID = parseInt(project.dataset.value);
            showTasks(projectID);
        });
        projectID = parseInt(project.dataset.value);
        showTasks(projectID);
    });
}

export { buttonListeners, selectProject }
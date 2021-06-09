import { addProject, addTask } from "./AddTodos";
import { cancelTaskForm, removeTask, showTaskForm, showProjectForm, removeProject } from "./UserInterface";

export default function buttonListeners () {
    window.addEventListener('click', e => {
        if (e.target.id === 'show-project-form') showProjectForm();
        else if (e.target.id === 'add-project') addProject();
        else if (e.target.className === 'project-checkbox') removeProject(e);
        else if (e.target.id === 'add-task-button') showTaskForm();
        else if (e.target.id === 'add-task-form') addTask();
        else if (e.target.className === 'task-checkbox') removeTask(e);
        else if (e.target.id === 'cancel-form') cancelTaskForm();
    })
}
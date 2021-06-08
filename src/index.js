import { showProjectForm, showTaskForm, cancelTaskForm, selectProject } from "./DOM";
import { addProject, addTask } from "./logic";

(function showForms() {
    showProjectForm();
    showTaskForm();
    cancelTaskForm();
})();

selectProject();
addProject();
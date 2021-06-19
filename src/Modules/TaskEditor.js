import { projectID, showTasks } from './UserInterface';
import { projects } from './Project';
import { setLocalStorage } from './Storage';

function editTaskTitle(e) {
    const title = document.querySelectorAll('.task-title');
    const titleEditor = document.querySelectorAll('.task-title-editor');
    for (let i = 0; i < title.length; i++) {
        title[i].style.display = 'block';
        titleEditor[i].classList.remove('active-task-editor');
    }

    e.target.style.display = 'none';

    const dataIndex = parseInt(e.target.dataset.index, 10);
    titleEditor[dataIndex].classList.add('active-task-editor');

    titleEditor[dataIndex].addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (titleEditor[dataIndex].value === '') {
                alert('Task cannot be blank.');
                return;
            }
            projects[projectID].tasks[dataIndex].title = titleEditor[dataIndex].value;
            titleEditor[dataIndex].classList.remove('active-task-editor');
            showTasks(projectID);
            setLocalStorage();
        }
    });
}

function editTaskDescription(e) {
    const description = document.querySelectorAll('.task-description');
    const descriptionEditor = document.querySelectorAll('.task-description-editor');
    for (let i = 0; i < description.length; i++) {
        description[i].style.display = 'block';
        descriptionEditor[i].classList.remove('active-task-editor');
    }

    e.target.style.display = 'none';

    const dataIndex = parseInt(e.target.dataset.index, 10);
    descriptionEditor[dataIndex].classList.add('active-task-editor');

    descriptionEditor[dataIndex].addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (descriptionEditor[dataIndex].value === '') {
                alert('Description cannot be blank.');
                return;
            }
            projects[projectID].tasks[dataIndex].description = descriptionEditor[dataIndex].value;
            descriptionEditor[dataIndex].classList.remove('active-task-editor');
            showTasks(projectID);
            setLocalStorage();
        }
    });
}

function editTaskDueDate(e) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    const yyyy = today.getFullYear();

    if (dd < 10) dd = `0 ${dd}`;
    if (mm < 10) mm = `${mm}`;

    today = `${yyyy}-${mm}-${dd}`;

    const dueDate = document.querySelectorAll('.task-due-date');
    const dueDateEditor = document.querySelectorAll('.task-due-date-editor');
    for (let i = 0; i < dueDate.length; i++) {
        dueDate[i].style.display = 'block';
        dueDateEditor[i].classList.remove('active-task-editor');
        dueDateEditor[i].setAttribute('min', today);
    }

    e.target.style.display = 'none';

    const dataIndex = parseInt(e.target.dataset.index, 10);

    dueDateEditor[dataIndex].classList.add('active-task-editor');

    dueDateEditor[dataIndex].addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (dueDateEditor[dataIndex].value === '') {
                alert('Date cannot be blank.');
                return;
            }
            projects[projectID].tasks[dataIndex].dueDate = dueDateEditor[dataIndex].value;
            dueDateEditor[dataIndex].classList.remove('active-task-editor');
            showTasks(projectID);
            setLocalStorage();
        }
    });
}

function editTaskPriority(e) {
    const priorities = document.querySelectorAll('.task-priority-editor');
    for (let i = 0; i < priorities.length; i++) {
        priorities[i].classList.remove('active-priority-editor');
    }

    const dataIndex = parseInt(e.target.dataset.index, 10);
    priorities[dataIndex].classList.add('active-priority-editor');

    const high = document.querySelectorAll('.High');
    high[dataIndex].addEventListener('click', (e) => {
        projects[projectID].tasks[dataIndex].priority = e.target.className;
        showTasks(projectID);
        setLocalStorage();
    });

    const medium = document.querySelectorAll('.Medium');
    medium[dataIndex].addEventListener('click', (e) => {
        projects[projectID].tasks[dataIndex].priority = e.target.className;
        showTasks(projectID);
        setLocalStorage();
    });

    const low = document.querySelectorAll('.Low');
    low[dataIndex].addEventListener('click', (e) => {
        projects[projectID].tasks[dataIndex].priority = e.target.className;
        showTasks(projectID);
        setLocalStorage();
    });
}

export { editTaskTitle, editTaskDescription, editTaskDueDate, editTaskPriority };

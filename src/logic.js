let todos = [];

class Project {
    constructor (title) {
        this.title = title;
        this.tasks = [];
    }

    addTaskToProject (task) {
        this.tasks.push(task);
    }
}

class Task {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
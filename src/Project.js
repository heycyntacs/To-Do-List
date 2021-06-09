let projects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.id = 0;
        this.tasks = [];
    }

    addID(id) {
        this.id = id;
    }
}

export { projects, Project }
const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
    if (!task) {
        console.log("Please provide a task to add.");
        return;
    }
    const tasks = loadTasks();
    tasks.push({ task });
    saveTask(tasks);
    console.log("Task added:", task);
};

const listTask = () => {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1} - ${task.task}`);
        });
    }
};

const removeTask = (index) => {
    const tasks = loadTasks();
    if (isNaN(index) || index < 1 || index > tasks.length) {
        console.log("Invalid task number.");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    saveTask(tasks);
    console.log("Task removed:", removedTask[0].task);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTask();
} else if (command === 'remove') {
    removeTask(parseInt(argument));
} else {
    console.log("Command not found!");
}

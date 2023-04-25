import { Task } from "../interfaces";

export const validateTask = (task: Task, tasksList: Task[]) => {
  if (!task.title) {
    return "Please enter a task";
  } else if (tasksList.find((t) => t.title === task.title)) {
    return "Task already exists";
  } else if (task.title.length > 15) {
    return "Task must be less than 15 characters";
  } else if (task.title.length < 3) {
    return "Task must be more than 3 characters";
  } else {
    return null;
  }
};
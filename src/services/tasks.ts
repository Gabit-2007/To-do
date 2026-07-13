import type { taskType } from "../schema/taskSchema.ts";
import { api } from "./api.ts";
import type { Tasks } from "./types/tasksType.ts";

export async function getTasks(): Promise<Tasks[]> {
  const response = await api.get<Tasks[]>("/tasks");
  return response.data;
}

export async function completeTask(task: Tasks) {
  const response = await api.patch(`/tasks/${task.id}`, {
    completed: !task.completed,
  });
  return response.data;
}

export async function postTask(task: taskType) {
  const response = await api.post("/tasks", { ...task, completed: false });
  return response.data;
}

export async function deleteTask(id: number | undefined) {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
}

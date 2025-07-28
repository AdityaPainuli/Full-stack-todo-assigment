import { Task } from "@/types/task";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchTasks(): Promise<Task[]> {
    const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-store" });
    return res.json();
}

export async function createTask(task: Partial<Task>) {
    const res = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return res.json();
}

export async function updateTask(id: number, task: Partial<Task>) {
    const res = await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return res.json();
}

export async function deleteTask(id: number) {
    return await fetch(`${BASE_URL}/tasks/${id}`, {
        method: "DELETE",
    });
}

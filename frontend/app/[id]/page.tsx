import { fetchTasks, updateTask } from "@/lib/api";
import TaskForm from "@/component/TaskForm";
import { notFound, redirect } from "next/navigation";
import { TaskColor } from "@/types/task";

interface Props {
    params: { id: string };
}

export default async function EditTaskPage({ params }: Props) {
    const tasks = await fetchTasks();
    const task = tasks.find((t) => t.id === Number(params.id));

    if (!task) return notFound();

    async function handleUpdate(data: { title: string; color: TaskColor }) {
        "use server";
        if (!task) return;
        await updateTask(task.id, data);
        redirect("/");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <TaskForm
                initialData={task}
                onSubmit={handleUpdate}
                submitText="Update"
            />
        </div>
    );
}

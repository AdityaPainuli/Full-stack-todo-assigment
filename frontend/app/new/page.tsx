import { createTask } from "@/lib/api";
import TaskForm from "@/component/TaskForm";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateTaskPage() {
    async function handleCreate(data: { title: string; color: "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "orange" | "teal" | "brown" }) {
        "use server";
        await createTask(data);
        redirect("/");
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
            </Link>

            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">🚀</span>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Todo App
                    </h1>
                </div>
            </div>

            <TaskForm onSubmit={handleCreate} submitText="Add Task" />
        </div>
    );
}
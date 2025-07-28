"use client";

import { Task } from "@/types/task";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteTask, updateTask } from "@/lib/api";
import { Trash2, Circle, CheckCircle2 } from "lucide-react";

interface Props {
    task: Task;
    onDelete?: () => void;
}

const getColorClasses = (color: string) => {
    const colorMap: Record<string, { circle: string; text: string }> = {
        red: { circle: "text-red-500", text: "text-red-400" },
        orange: { circle: "text-orange-500", text: "text-orange-400" },
        yellow: { circle: "text-yellow-500", text: "text-yellow-400" },
        green: { circle: "text-green-500", text: "text-green-400" },
        blue: { circle: "text-blue-500", text: "text-blue-400" },
        purple: { circle: "text-purple-500", text: "text-purple-400" },
        pink: { circle: "text-pink-500", text: "text-pink-400" },
        teal: { circle: "text-teal-500", text: "text-teal-400" },
        brown: { circle: "text-amber-600", text: "text-amber-500" },
    };

    return colorMap[color] || { circle: "text-blue-500", text: "text-blue-400" };
};

export default function TaskCard({ task, onDelete }: Props) {
    const router = useRouter();
    const colorClasses = getColorClasses(task.color);

    const toggleCompletion = async () => {
        await updateTask(task.id, { completed: !task.completed });
        router.refresh();
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this task?")) {
            await deleteTask(task.id);
            if (onDelete) onDelete();
            router.refresh();
        }
    };

    return (
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 group">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleCompletion}
                    className="flex-shrink-0 transition-colors duration-200"
                >
                    {task.completed ? (
                        <CheckCircle2 className={`w-6 h-6 ${colorClasses.circle}`} />
                    ) : (
                        <Circle className={`w-6 h-6 ${colorClasses.circle} hover:${colorClasses.circle.replace('text-', 'text-')}`} />
                    )}
                </button>
                <Link
                    href={`/${task.id}`}
                    className={`hover:underline text-lg transition-all duration-200 ${task.completed
                            ? `${colorClasses.text} line-through`
                            : 'text-gray-200 hover:text-white'
                        }`}
                >
                    {task.title}
                </Link>
            </div>
            <button
                onClick={handleDelete}
                className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-400 transition-all duration-200"
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    );
}
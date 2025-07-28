"use client";

import { useState } from "react";
import { Task, TaskColor } from "@/types/task";

interface Props {
    initialData?: Partial<Task>;
    onSubmit: (data: { title: string; color: TaskColor }) => Promise<void>;
    submitText: string;
}

const colors: { name: TaskColor; bgColor: string; label: string }[] = [
    { name: "red", bgColor: "bg-red-500", label: "Red" },
    { name: "orange", bgColor: "bg-orange-500", label: "Orange" },
    { name: "yellow", bgColor: "bg-yellow-500", label: "Yellow" },
    { name: "green", bgColor: "bg-green-500", label: "Green" },
    { name: "blue", bgColor: "bg-blue-500", label: "Blue" },
    { name: "purple", bgColor: "bg-purple-500", label: "Purple" },
    { name: "pink", bgColor: "bg-pink-500", label: "Pink" },
    { name: "teal", bgColor: "bg-teal-500", label: "Teal" },
    { name: "brown", bgColor: "bg-amber-600", label: "Brown" },
];

export default function TaskForm({ initialData = {}, onSubmit, submitText }: Props) {
    const [title, setTitle] = useState(initialData.title || "");
    const [color, setColor] = useState<TaskColor>(initialData.color || "blue");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        setIsSubmitting(true);
        try {
            await onSubmit({ title, color });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="space-y-6">
                {/* Title Input */}
                <div>
                    <label className="block text-blue-400 font-medium mb-3 text-lg">
                        Title
                    </label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-lg"
                        placeholder="Ex. Brush you teeth"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Color Selection */}
                <div>
                    <label className="block text-blue-400 font-medium mb-4 text-lg">
                        Color
                    </label>
                    <div className="flex gap-3 flex-wrap">
                        {colors.map((colorOption) => (
                            <button
                                key={colorOption.name}
                                type="button"
                                onClick={() => setColor(colorOption.name)}
                                className={`w-12 h-12 rounded-full ${colorOption.bgColor} transition-all duration-200 ${color === colorOption.name
                                        ? 'ring-4 ring-white ring-opacity-50 scale-110'
                                        : 'hover:scale-105'
                                    }`}
                                title={colorOption.label}
                            />
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !title.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Adding...
                        </>
                    ) : (
                        <>
                            {submitText}
                            <span className="ml-2">📝</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
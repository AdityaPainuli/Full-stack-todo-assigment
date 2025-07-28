import { fetchTasks } from "@/lib/api";
import TaskCard from "@/component/TaskCard";
import { Plus } from "lucide-react";

export default async function HomePage() {
  const tasks = await fetchTasks();
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-6">
       
        <div className="mb-8">
          <a
            href="/create" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 no-underline"
          >
            <Plus className="w-5 h-5" />
            Create Task
          </a>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-lg font-semibold text-blue-400">Tasks</h2>
            <p className="text-2xl font-bold text-gray-200">{tasks.length}</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-purple-400">Completed</h2>
            <p className="text-2xl font-bold text-gray-200">
              {completedCount} of {tasks.length}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {pendingTasks.length > 0 && (
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}

          {completedTasks.length > 0 && (
            <div className="space-y-3">
              {completedTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}

          {tasks.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-gray-600">📋</div>
              </div>
              <p className="text-gray-500 text-lg">No tasks found</p>
              <p className="text-gray-600 text-sm mt-2">
                Create your first task to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React from "react";

const MyTask = () => {
  const tasks = [
    {
      id: 1,
      title: "Build React Task App",
      description: "Create UI design with TailwindCSS.",
      status: "Pending",
    },
    {
      id: 2,
      title: "Learn TypeScript",
      description: "Practice interfaces and generics.",
      status: "Completed",
    },
    {
      id: 3,
      title: "Workout",
      description: "Do 30 mins of exercise in the morning.",
      status: "Running",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
    Completed: "bg-green-500/20 text-green-400 border border-green-500/40",
    Running: "bg-blue-500/20 text-blue-400 border border-blue-500/40",
  };

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-3xl mb-6 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 drop-shadow-lg">
        📋 My Tasks
      </h1>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-5 bg-gray-900/70 rounded-xl border border-gray-700 shadow-lg hover:shadow-indigo-700 transition"
          >
            <div className="flex justify-between items-start">
              {/* Task Info */}
              <div>
                <h2 className="text-lg font-semibold text-gray-100">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">{task.description}</p>
              </div>

              {/* Badge */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  statusColors[task.status]
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTask;

import React from "react";

const TaskDetail = () => {
  return (
    <div className="">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 mb-6 text-center mt-4">
        Update Your Task
      </h1>

      {/* Update Form */}
      <div className="mt-6  space-y-4">
        {/* <h2 className="text-2xl font-semibold text-gray-100">Update Task</h2> */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Description</label>
            <textarea
              rows={3}
              placeholder="Enter task description"
              className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Status</label>
            <select className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-indigo-500">
              <option>Pending</option>
              <option>Running</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;

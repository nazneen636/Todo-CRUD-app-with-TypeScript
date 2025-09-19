import React, {
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { FaPlus } from "react-icons/fa";
import lib from "../lib/lib";
import { useNavigate, useNavigation } from "react-router";
import { RouteTaskList } from "../helpers/route";

const AddTask: FC = () => {
  interface taskType {
    title: string;
    description: string;
  }
  const [task, setTask] = useState<taskType>({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(task);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { title, description } = task;
    if (title === "" || description === "") {
      lib.ErrorToast("Input field is missing");
    } else {
      lib.SuccessToast("Successfully add your Task");
      setTask({ title: "", description: "" });
      navigate(RouteTaskList);
    }
  };
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 drop-shadow-lg">
        Add a New Task
      </h1>

      {/* Add Task Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-2">
            Task Description
          </label>
          <textarea
            placeholder="Enter task description"
            name="description"
            rows={4}
            value={task.description}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-pink-700 hover:scale-[1.02] transition flex items-center justify-center gap-2"
        >
          <FaPlus /> ADD Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

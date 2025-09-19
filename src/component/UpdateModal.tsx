import React from "react";
import { IoClose } from "react-icons/io5";

import Modal from "react-modal";
// Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // dark transparent overlay
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    width: "40%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent", // make the content itself transparent
    border: "none", // remove default border
    padding: "0", // remove default padding
  },
};

interface updateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}
const UpdateTask: React.FC<updateTaskProps> = ({ isOpen, onClose }) => {
  return (
    <div className="">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full  bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-700">
          {/* Header */}
          <button
            className="absolute right-4 top-4 text-white text-xl"
            onClick={onClose}
          >
            <IoClose />
          </button>
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
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 w-full bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UpdateTask;

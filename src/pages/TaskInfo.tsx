import React from "react";
import { Link } from "react-router";
import { RouteTaskUpdate } from "../helpers/route";
import { FaEdit } from "react-icons/fa";
import UpdateTask from "../component/UpdateModal";

const TaskInfo = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      {/* Task Info */}
      <div className=" p-5 rounded-lg border border-[#ffffff11] shadow-inner space-y-4 relative">
        <div
          onClick={openModal}
          className="p-2 rounded text-xl text-green-500 cursor-pointer absolute right-4 top-4"
        >
          <FaEdit />
        </div>
        <UpdateTask isOpen={modalIsOpen} onClose={closeModal} />
        <div>
          <h2 className="text-xl font-semibold text-gray-100">Task Title</h2>
          <p className="text-gray-400 mt-1">Build React Task App</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-100">Description</h2>
          <p className="text-gray-400 mt-1">
            Create UI design with TailwindCSS and implement features.
          </p>
        </div>
        <div className="pt-2">
          {/* <h2 className="text-xl font-semibold text-gray-100 mb-2">Status</h2> */}
          <span className="mt-2 px-3 py-1 text-sm font-semibold rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
            Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;

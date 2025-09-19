import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import MyTask from "./component/MyTask";
import {
  RouteShowTaskInfo,
  RouteTaskList,
  RouteTaskUpdate,
} from "./helpers/route";
import TaskDetail from "./pages/Task";
import TaskInfo from "./pages/TaskInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RouteTaskList} element={<MyTask />} />
          <Route path={RouteShowTaskInfo} element={<TaskInfo />} />
          <Route path={RouteTaskUpdate} element={<TaskDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

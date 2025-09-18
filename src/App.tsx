import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./component/Layout";
import MyTask from "./component/MyTask";
import { RouteTaskList } from "./helpers/route";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RouteTaskList} element={<MyTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

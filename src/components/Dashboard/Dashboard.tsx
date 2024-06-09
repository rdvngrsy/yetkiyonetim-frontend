import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Auth/Login/Login";
import PrivateRoutes from "../../core/utils/PrivateRoutes/PrivateRoutes";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../../pages/MainContent/MainContent";

const Dashboard = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Homepage />}></Route>
        </Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/*"
            element={
              <div className="bg-gray-200  flex h-screen">
                <Sidebar />
                <MainContent />
              </div>
            }
          />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

export default Dashboard;

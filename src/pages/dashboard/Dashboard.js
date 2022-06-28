import React from "react";
import { AppLayout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { userData } from "../../auth/isAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = userData();
  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <AppLayout>
      <div className="text-center">
        <h1 className="text-white">Welcome To Pluc.tv</h1>
        <p className="text-white h4 mt-5 text-capitalize">{user?.name}</p>
        <button
          onClick={logout}
          className="btn btn-warning w-10 py-2 px-5 mt-3 text-white text-bold"
        >
          Logout
        </button>
      </div>
    </AppLayout>
  );
};

export default Dashboard;

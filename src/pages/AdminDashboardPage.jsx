import React from "react";
import { AuthContext } from "../authContext";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);

  const onLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard
      </div>
    </>
  );
};

export default AdminDashboardPage;

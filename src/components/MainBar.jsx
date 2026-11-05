import React, { useContext } from "react";

import { useLocation } from "react-router-dom";
import MyContext from "./MyContext";
import TimeTable from "../pages/TimeTable";
import ProfilData from "./ProfilData";
import Notifications from "./Notifications";
import Assignments from "./Assignments";
import ManageAssignments from "./ManageAssignments";
  

const MainBar = () => {
  const location = useLocation();
  const user = location.state;

  const { clicked } = useContext(MyContext);

  const renderPage = () => {
    switch (clicked) {
      case "Dashboard":
        return <ProfilData user={user} />;

   case "Assignments":
  return (
    <>
      {user?.role === "Student" ? (
        <Assignments user={user} />
      ) : (
        <ManageAssignments user={user} />
      )}
    </>
  );
      case "Notification":
        return <Notifications user={user} />;

      case "Time-Table":
        return <TimeTable user={user} />;

     

      default:
        return <ProfilData user={user} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-amber-50">

      <div className="w-full min-h-36 sm:min-h-40 bg-gray-200 p-4 sm:p-5 flex items-center justify-between shadow-2xl sticky top-0 z-10">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Welcome Back {user?.name}! 👋
        </h1>

      </div>

      {renderPage()}

    </div>
  );
};

export default MainBar;
import React, { useContext } from "react";
import AdminSearch from "../../components/AdminSearch";
import { GlobalContext } from "../../context/GlobalState";

const Dashboard = () => {

    const {blogData} = useContext(GlobalContext)
  return (
    <div className="Dashboard">
      <AdminSearch />

      <p>Number of Posts: {blogData.length}</p>
    </div>
  );
};

export default Dashboard;

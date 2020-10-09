import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AllBlogs from "../AllBlogs";

const Dashboard = () => {

    const {blogData} = useContext(GlobalContext)
  return (
    <div className="Dashboard">

      <p>Number of Posts: {blogData.length}</p>

      <AllBlogs asAdmin={true} />
    </div>
  );
};

export default Dashboard;

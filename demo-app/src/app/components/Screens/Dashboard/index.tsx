import React, { useEffect, useState } from "react";
import { getPosts } from "../../../../services/apiServices";
import MyPagination from "../../../Utils/Pagination";
import Grid from "./Grid";

const Dashboard = () => {
  const [totalPg, setTotalPg] = useState<Number>(10);
  const [currPage, setCurrPage] = useState<Number>(1);
  const [posts, setPosts] = useState<Object[]>([]);

  useEffect(() => {
    getPOstData();
  }, []);

  const afterPageClicked = (page: Number) => {
    setCurrPage(page);
  };

  const getPOstData = async () => {
    const response = await getPosts();
    if (response.status == 200) {
        setPosts(response.data)
      console.log(response);
    }else{
        alert('Someting went wrong please try again !')
    }
  };
  return (
    <React.Fragment>
      <Grid data={posts} />
      {/* <MyPagination
        totPages={totalPg}
        currentPage={currPage}
        pageClicked={(page: Number) => {
          afterPageClicked(page);
        }}
      /> */}
    </React.Fragment>
  );
};

export default Dashboard;

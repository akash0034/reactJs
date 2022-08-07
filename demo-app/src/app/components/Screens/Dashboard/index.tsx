import React, { useEffect, useState } from "react";
import { getComments, getPosts } from "../../../../services/apiServices";
import Grid from "./Grid";
import { Pagination } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./dashboard.css";
const Dashboard = () => {
  const [totalPg, setTotalPg] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  const [posts, setPosts] = useState<Object[]>([]);
  const [apiData, setApi] = useState<Object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const count = 10;
  useEffect(() => {
    getPOstData();
  }, []);

  //function to devide array in size of 10
  async function chunkArrayInGroups(arr: any, size: number) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  }

  //to handel page
  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrPage(value);
    const data = await chunkArrayInGroups(apiData, count);
    setPosts(data[value - 1]);
  };

  // API call to get posts
  const getPOstData = async () => {
    const response = await getPosts();

    //if api gives success
    if (response.status === 200) {
      // API call to get Comments
      const comments = await getComments();

      //if api gives success
      if (comments.status == 200) {
        // filter posts array
        response.data.filter((i: any) => {
          // declare array to store comments against postID
          i.comments = [];
          // filter commets
          comments.data.filter((j: any) => {
            if (i.id == j.postId) {
              i.comments.push(j);
            }
          });
        });

        // setState for lodingView
        setIsLoading(false);

        // to set total pages for pagination
        const pages = Math.ceil(response.data.length / count);
        setTotalPg(pages);

        // to break array in to szize of 10
        const data = await chunkArrayInGroups(response.data, count);
        // set State  of response
        setApi(response.data);

        setPosts(data[0]);
      } else {
        // if api gives error
        setIsLoading(false);
        alert("Someting went wrong please try again !");
      }
    } else {
      // if api gives error

      setIsLoading(false);
      alert("Someting went wrong please try again !");
    }
  };
  return (
    <React.Fragment>
      {/* Loading View */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "50%",
          }}
        >
          <CircularProgress value={100} size={100} />
        </div>
      )}

      {/* Table View */}
      <Grid data={posts} />
      <br />

      {/* Pagination */}
      {posts.length > 0 && (
        <Pagination
          count={totalPg}
          page={currPage}
          color="primary"
          onChange={handleChange}
          style={{ marginLeft: "40%" }}
        />
      )}
    </React.Fragment>
  );
};

export default Dashboard;

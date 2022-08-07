import axios from "axios";

// API form .env 
const baseApi = process.env.REACT_APP_API

//getPosts api 
export async function getPosts() {
  const url = baseApi+"posts";

  return axios.get(url);
}

//get Comments api
export async function getComments() {
    const url = baseApi+"comments";
  
    return axios.get(url);
  }

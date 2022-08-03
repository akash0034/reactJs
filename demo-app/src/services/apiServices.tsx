import axios from "axios";

export async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  return axios.get(url);
}

export async function getComments() {
    const url = "https://jsonplaceholder.typicode.com/comments";
  
    return axios.get(url);
  }

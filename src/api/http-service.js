import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const getAllPosts = () => axios.get(baseURL + "posts");
const getAllUsers = () => axios.get(baseURL + "users");
const getAllComments = () => axios.get(baseURL + "comments");
const getPostData = (id) => axios.get(baseURL + "posts/" + id);
const getUser = (id) => axios.get(baseURL + "users/" + id);
const getPostComments = (postId) =>
  axios.get(baseURL + "comments/?postId=" + postId);

const httpService = {
  getAllPosts,
  getAllUsers,
  getAllComments,
  getPostData,
  getUser,
  getPostComments,
};

export default httpService;

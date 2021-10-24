import axios from "axios";

const instances = axios.create({
  withCredentials: true,
  baseURL: "https://flipkart-clone-backend-project.herokuapp.com",
});

export default instances;

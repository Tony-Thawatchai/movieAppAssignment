import axios from "axios";
import {
  REQ_HEADER,
  MOVIE_BASE_URL,
  TV_BASE_URL,
  SEARCH_BASE_URL,
  SINGLE_BASE_URL
} from "../config/apiConfig";

export const getMovies = async (category) => {
  const url = MOVIE_BASE_URL;

  try {
    const response = await axios.get(url + category, REQ_HEADER);
    //    console.log(url + category, REQ_HEADER)
    //    console.log(response.data.results);
    //    console.log("response.data.results",response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
export const getTVShow = async (category) => {
  const url = TV_BASE_URL;

  try {
    const response = await axios.get(url + category, REQ_HEADER);
    //    console.log(url + category, REQ_HEADER)
    //    console.log(response.data.results);
    //    console.log("response.data.results",response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
export const getShowSingle = async (type,id) => {
  const url = SINGLE_BASE_URL;

  try {
    const response = await axios.get(url +type+ id, REQ_HEADER);
    //    console.log(url + category, REQ_HEADER)
    //    console.log(response.data.results);
    //    console.log("response.data.results",response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
export const getSearch = async (category, query) => {
  const url = SEARCH_BASE_URL;

  try {
    const response = await axios.get(url + category+`?query=${query}`, REQ_HEADER);
       console.log(url + category+`?query=${query}`, REQ_HEADER)
    //    console.log(response.data.results);
    //    console.log("response.data.results",response.data.results);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

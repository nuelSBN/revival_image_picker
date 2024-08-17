import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_KEY = process.env.REACT_APP_API_KEY;

export const fetchRandomImages = async () => {
  const response = await axios.get(`${BASE_URL}?count=4`, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });
  return response.data;
};

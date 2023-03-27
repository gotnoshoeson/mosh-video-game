import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7ff677debee94bcd8c36d5a85cefb813'
  }
})
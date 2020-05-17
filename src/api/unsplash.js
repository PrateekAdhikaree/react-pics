import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID iLkjLaeLfTX8s6cVPzFBYsnhqhD_3X6oC8_Ar9bqrro'
  }
});

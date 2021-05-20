import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hgMA6wLpDBwYyek8BOqs0jmCFsuRGTdry1JJfNTfpLY'
  }
})
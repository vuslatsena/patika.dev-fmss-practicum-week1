import axios from 'axios';

export const getUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
      resolve(data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { status, data } = error.response;
        reject(new Error(`Request failed with status ${status}: ${data}`));
      } else if (error.request) {
        // The request was made but no response was received
        reject(new Error(`No response received from server: ${error.request.url}`));
      } else {
        // Something happened in setting up the request that triggered an Error
        reject(new Error(`Error occurred: ${error.message}`));
      }
    }       
  });
};

export const getPosts = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      resolve(data);
    } catch (error) {
      error.message = `Error getting posts for user ${userId}: ${error.message}`;
      reject(error);
    }          
  });
};

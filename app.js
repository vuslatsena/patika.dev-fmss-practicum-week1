import readline from 'readline';
import { getPosts, getUsers } from './getdata.js';

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInterface.question('Please enter a user ID: ', async (userId) => {
  console.log(`User ID entered: ${userId}`);
  if (isNaN(userId)) return console.error('The value entered is not a number!');
  try {
    const userWithPosts = { ...(await getUsers(userId)), posts: await getPosts(userId) };
    console.log(userWithPosts);
  } catch (error) {
    console.error(error);
  }
  readlineInterface.close();
});

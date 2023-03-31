const readline = require('readline');
const { getUsers, getPosts } = require('./your-module');

// Create a readline interface object
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a user ID and retrieve the user object with its posts
readlineInterface.question('Please enter a user ID: ', async (userId) => {
  console.log(`User ID entered: ${userId}`);
  // Check if the user entered a valid number
  if (isNaN(userId)) return console.error('The value entered is not a number!');
  try {
    // Retrieve the user object with its posts
    const userWithPosts = { ...(await getUsers(userId)), posts: await getPosts(userId) };
    console.log(userWithPosts);
  } catch (error) {
    // Handle errors
    console.error(error);
  } finally {
    // Close the readline interface
    readlineInterface.close();
  }
});

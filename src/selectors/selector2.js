import axios from 'axios';

// we're using this file in order to organize our api calls.
// later we'll use this file as source for moving into selector3.js - because it's have a better approach of handling our api calls
// here we have an actually worked before react app that send queries into our loopback server
// https://github.com/ChickenKyiv/loopback-tutor-intern-8/tree/frontend
// also check selectors/api-config.js file 

const serverURL = '';

let GroceristarAPI = {

};

GroceristarAPI.methodA = function() => {

  console.log(serverURL)

};

export default GroceristarAPI;

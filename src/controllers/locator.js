//import axios from 'axios';

export const getLocation = (callback, callbackOnError) => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => callback(data))
  .catch(error => callbackOnError(error));
}

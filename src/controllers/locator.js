//import axios from 'axios';

export const getLocation = (callback, callbackOnError) => {
  fetch("https://ipapi.co/json/")
    .then((res) => {
      callback(res.json());
    }).catch((error) => {
      callbackOnError(error);
    });
}

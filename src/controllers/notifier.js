import axios from 'axios';

export const notifyVisit = (location) => {
  const route = "https://portfolio-notifier.herokuapp.com/api/sendVisitEmail";
  axios.post(route, location)
    .then((res) => {
      return;
    }).catch((error) => {
      console.log(error);
    });
}

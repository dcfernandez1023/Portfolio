import axios from 'axios';

export const notifyVisit = (location) => {
  const route = "http://localhost:5000/api/sendSms";
  axios.post(route)
    .then((res) => {
      console.log("Successfully sent SMS request");
    }).catch((error) => {
      console.log(error);
    });
}

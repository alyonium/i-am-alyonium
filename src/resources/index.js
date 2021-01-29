import axios from 'axios';

const backendUrl = 'https://alyonium.herokuapp.com';

const sendMessage = (mail, message) => (
  axios
    .post(`${backendUrl}/sentMessage`, {
      mail,
      message,
    })
);

const getWorksPreviews = () => (
  axios
    .get(`${backendUrl}/getPreviews`)
    .then((response) => response.data)
);

const getWorksList = () => (
  axios
    .get(`${backendUrl}/getWorks`)
    .then((response) => response.data)
);

export {
  sendMessage, getWorksPreviews, getWorksList, backendUrl,
};

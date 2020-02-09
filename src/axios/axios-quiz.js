import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-5e0d2.firebaseio.com/'
})
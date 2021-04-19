const axios = require('axios');

export const getJoke = () => {

  return (dispatch) => {
    axios
      .get('https://random-word-api.herokuapp.com/word?number=10')
      .then(function (response) {
        console.log(response.data);
        dispatch(saveWords(response.data))
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

export const saveWords = (joke) => {
  console.log(joke);
  return {
  type: 'SAVE_WORDS',
  payload: joke 
  }
}
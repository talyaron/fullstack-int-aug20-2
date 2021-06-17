import axios from 'axios';
export const chackNorrisJoke = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(({ data }) => {
                resolve(data)
            })
            .catch(e=>reject(e))
    });
}
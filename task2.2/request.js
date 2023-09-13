const axios = require('axios');
const fs = require('fs');

function getData() {
    return axios.get('https://jsonplaceholder.typicode.com/photos/11')
        .then((response) => {
            fs.writeFileSync('readme.txt', JSON.stringify(response.data));
            console.log('done')
        })
        .catch((e) => {
            console.log(e)
        })
}

module.exports = {
    getData
}
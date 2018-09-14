const axios = require('axios');

characters = [];
id = 0;

const getCharacters = (req,res) => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        console.log('res: ', response);
        res.status(200).json(response.data);
});
}



module.exports = {
    getCharacters,
}
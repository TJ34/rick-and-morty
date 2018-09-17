const axios = require('axios');

favorites = [];
id = 0;

const getCharacters = (req,res) => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
        res.status(200).json(response.data);
    });
}

const getQuotes = (req, res) => {
    axios.get('http://loremricksum.com/api/?paragraphs=1&quotes=1').then((response) => {
        res.status(200).send(response.data);
    })
}

module.exports = {
    getCharacters,

    getQuotes,

    addToFavorites(req, res){
        const {image, name} = req.body;
        let comment = " ";
        favorites.push({id, name, image, comment});
        id++;
        res.status(200).send(favorites);
    },
    favoriteArr(req,res){
        res.status(200).send(favorites);
    },
    deleteFavorite(req,res){
        const deleteID = req.params.id;
        let characterIndex=favorites.findIndex(character=>character.id == deleteID);
        favorites.splice(characterIndex,1);
        res.status(200).send(favorites);
    },
    updateComment(req,res){
        const{text} = req.body;
        console.log(text)
        const commentID = req.params.id;
        const commentIndex = favorites.findIndex(character=>character.id == commentID);
        let comment = favorites[commentIndex];

        favorites[commentIndex] = {
            id: comment.id,
            name: comment.name,
            image: comment.image,
            comment: text || comment.comment
        };
        res.status(200).send(favorites);
    }
}
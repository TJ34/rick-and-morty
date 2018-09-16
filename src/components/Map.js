import React from 'react';
import './characters/Characters.css';

export default function Map (props){
    let characters = props.characterArray.map((character, i) => {
        return <div key={i} className="namePic">
                    <img src={character.image} alt="Whoops!" className = "image" />
                    <div className="buttonName">
                        <button className="favoriteButton"
                                onClick={() => props.addToFavorites(character.image, character.name)}
                        >fav</button>
                        <div className="cn">{character.name}</div>
                    </div>
               </div>
    })

    return <div className="characters">{characters}</div>
}
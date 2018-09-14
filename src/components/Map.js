import React from 'react';

export default function Map (props){
    let characters = this.props.map((character, i) => {
        return <div key={i} className="namePic">
                    <img src={props.image} alt="Whoops!" className = "image" />
                    <div className="cn">{props.name}</div>
               </div>
    })

    return <div>{characters}</div>
}
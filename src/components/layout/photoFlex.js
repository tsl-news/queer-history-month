import React from 'react';


export default function photoFlex(props) {
    return (
        <div class = "lavender">
          <div class = "lav-container">
              <img class = "flower" src = {require(`../../assets/images/${props.photo1}`)}/>
              <img class = "letter" src = {require(`../../assets/images/${props.photo2}`)}/>
              <img class = "flower" src = {require(`../../assets/images/${props.photo3}`)}/>
          </div>

        </div>
    );
}



        
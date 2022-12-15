import React from 'react';


export default function Article(props) {
    return (
            <div className = "article-box">
                <h2>{props.type}</h2>
                <h1>{props.title1}</h1>
                <h1>{props.title2}</h1>
                <p>By {props.author}</p>
                <p><i>{props.warning}</i></p>
            </div>
      );
}
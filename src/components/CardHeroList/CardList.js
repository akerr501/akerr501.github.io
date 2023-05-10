import * as React from "react";
import { useState } from 'react';
import { Card } from "../CardHero/CardHero";
import "./list.css";


import portfolioData from '../../resources/data/portfolio.json';



  export const CardList = (props) => {


    const [id, setID] = useState('');
    const onClick = (itemID: string) => () => {
      setID(id !== itemID ? itemID : '')
    };
    // console.log(id)

    return (
      <ul className="card-list p-5 pt-1">
        {portfolioData.map(card => (
          <Card
            key={card.id}
            isSelected={id === card.id}
            theme={props.theme}
            onClick={onClick(card.id)}
            pointOfInterest={0}
            backgroundColor={"#5DBCD2"}
            {...card}
          />
        ))}
      </ul>
    );
  }

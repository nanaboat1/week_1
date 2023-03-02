import React from "react";
import './Card.css';

// interface for [ Card ] component
export interface CardProps { 
    img_path : string; 
    gameTitle : string; 
    gameTime : string; 
    gameLocation : string; 
    ticketURL : string; 
    ticketCost : number; 
    league : string; 

}; 

// default props 
const initialCard : CardProps =  { 
    img_path : 'default', 
    gameTitle : 'unknown', 
    gameTime : '00:00', 
    gameLocation : 'unknown', 
    ticketURL : 'unkown', 
    ticketCost : 590,
    league : 'unknown'
} 



// card component of event
const Card : React.FC<CardProps> =  ( { img_path, gameTitle, // type annotation
    gameTime, gameLocation, 
    ticketURL, ticketCost, league  } :
    CardProps) => { 

    return  (
        <div className="Card">
            <img alt="soccer-match" className={gameTitle} src={img_path} width={400} height={220} />
                <h2> {gameTitle}  </h2>
                <h3> {league} </h3>
                <h3>{gameTime} • {gameLocation} </h3>
                <h4> Ticket Cost : ${ticketCost} </h4> 
            <button type='button' className="ticket-button" title={'Buy'} onClick={() => window.open(ticketURL, '_blank')?.focus() }>BUY</button>

        </div>
    )

 
}; 

export default Card; 

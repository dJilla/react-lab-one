import React, {useState} from 'react';
import './Votes.css';

export function Votes() {

    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const totalVotes = vanillaVotes + chocolateVotes + strawberryVotes;

    const vanillaStyles = {
        width: ((vanillaVotes / totalVotes) * 100)
    }

    const chocolateStyles = {
        width: ((chocolateVotes / totalVotes) * 100)
    }

    const strawberryStyles = {
        width: ((strawberryVotes / totalVotes) * 100)
    }


    return (
    <div className='voteSection'>
        
        <h1>Vote Here</h1>
        <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
        <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
        <button  onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>

        <h2>Vanilla: {vanillaVotes}</h2>
        <div className='vanillaGraph' style={vanillaStyles}></div>
        <h2>Chocolate: {chocolateVotes}</h2>
        <div className='chocolateGraph' style={chocolateStyles}></div>
        <h2>Strawberry: {strawberryVotes}</h2>
        <div className='strawberryGraph' style={strawberryStyles}></div>

    </div>
    );
}
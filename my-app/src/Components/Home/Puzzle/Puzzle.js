import { React, useState } from 'react'
import './Puzzle.css'
import Prompt from './Prompt'

let arrOne = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles']
let arrTwo = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm', 'Jordan Heigle', 'Tyler Viles']

//Combine Arrays
const combinedArr = arrOne.concat(arrTwo)
// Remove duplicates by creating and destructuring Set
let uniqueArr = [...new Set(combinedArr)];
//Create li for each name
const listNames = uniqueArr.map((name) => 
  <li key={name}> {name} </li>
);

const Puzzle = () => {
    const [ linkState, setLinkState ] = useState(0);
    if (linkState === 0) {       
        return (
            <Prompt getLinkState={() => setLinkState(linkState + 1)}/>
        )
    } else if (linkState === 1) {
        return (
            <div>
                <Prompt getLinkState={() => setLinkState(linkState + 1)}/>
                <ul> {listNames} </ul>
            </div>
        )
    } else {
        alert("This operation has already been completed.")
        return (
            <div>
                <Prompt getLinkState={() => setLinkState(linkState + 1)}/>
                <ul> {listNames} </ul>
            </div>
        )
    } 
}

export default Puzzle


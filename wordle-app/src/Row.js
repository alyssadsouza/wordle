import { useState } from 'react';
import './App.css';
import Tile from './Tile';

function Row({row, turn, word, playTurn}) {

    // keep track of colour of letters in the row
    const [letters, updateColours] = useState(Array(5).fill("")); // let B represent Black (Gray), Y rep yellow, G rep green, "" rep blank
    const [focus, setFocus] = useState(0);

    const checkRow = (e) => {
        // TODO: check that guess is a valid word
        e.preventDefault();
        //console.log(letters);
        if (turn === row) {
            playTurn(!letters.includes("Y") && !letters.includes("B"));
        }
    }
    //console.log(focus);

    return (
        <form onSubmit={checkRow} className="Row">
        <Tile row={row} tile={0} turn={turn} word={word} letters={letters} updateColours={updateColours} focus={focus} setFocus={setFocus} />
        <Tile row={row} tile={1} turn={turn} word={word} letters={letters} updateColours={updateColours} focus={focus} setFocus={setFocus} />
        <Tile row={row} tile={2} turn={turn} word={word} letters={letters} updateColours={updateColours} focus={focus} setFocus={setFocus} />
        <Tile row={row} tile={3} turn={turn} word={word} letters={letters} updateColours={updateColours} focus={focus} setFocus={setFocus} />
        <Tile row={row} tile={4} turn={turn} word={word} letters={letters} updateColours={updateColours} focus={focus} setFocus={setFocus} />
        <button type="submit" style={{opacity:0}}></button>
        </form>
    );
}

export default Row;

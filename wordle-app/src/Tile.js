import { useEffect, useState } from 'react';
import './App.css';

function Tile({row, tile, turn, word, letters, updateColours, focus, setFocus}) {

    const [colour, setColour] = useState(""); //keep states for when turn has passed to know what to set the prev tiles' values and colours to
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        let letter = e.target.value.toLowerCase();
        let col = "";

        if (word[tile] === letter) {col = "G"}
        else if (word.includes(letter)) {col="Y"}
        else {col="B"}

        let newLetters = letters.splice(0);
        newLetters[tile] = col;

        setValue(letter);
        setColour(col);
        updateColours(newLetters);
        setFocus(focus+1);
    }

    const getColour = () => {
        if (turn <= row) {return "";}
        //console.log(colour);
        return colour;
    }
    
    const tileFocus = () => {
        let currentTile = document.getElementById(`tile-${row}-${focus}`);
        if (currentTile) {
            currentTile.focus();
        }
    }

    useEffect(tileFocus, [focus]);

    return (
        <div className="Tile">
            {/* TODO: make inputs automatically move to next tile after one letter , autofocus on first tile of active row */}
            {turn === row ? 
                <input type="text" onChange={handleChange} id={`tile-${row}-${tile}`} /> :
                <input type="text" disabled value={value} id={`tile-${row}-${tile}`} className={getColour()}/>
            }
        </div>
    );
}

export default Tile;

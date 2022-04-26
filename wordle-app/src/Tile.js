import { useState } from 'react';
import './App.css';

function Tile({row, tile, turn, word, letters, updateColours}) {

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
    }

    const getColour = () => {
        if (turn <= row) {return "";}
        //console.log(colour);
        return colour;
    }

    return (
        <div className="Tile">
            {turn === row ? 
                <input type="text" onChange={handleChange}/> :
                <input type="text" disabled value={value} className={getColour()}/>
            }
        </div>
    );
}

export default Tile;

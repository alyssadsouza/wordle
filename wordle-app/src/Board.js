import './App.css';
import {useEffect, useState} from 'react';
import Row from './Row';

function Board() {

    const [turn, setTurn] = useState(0);
    const [word, setWord] = useState("");
    useEffect(() => {getWord()}, []);

    async function getWord() {
        let word = await fetch("https://random-word-api.herokuapp.com/word?length=5");
        word = await word.json();
        setWord(word[0]);
    }

    return (
        <div className="Board">
            <p>{word}</p>
            <Row row={0} turn={turn} word={word} setTurn={setTurn} />
            <Row row={1} turn={turn} word={word} setTurn={setTurn} />
            <Row row={2} turn={turn} word={word} setTurn={setTurn} />
            <Row row={3} turn={turn} word={word} setTurn={setTurn} />
            <Row row={4} turn={turn} word={word} setTurn={setTurn} />
            <Row row={5} turn={turn} word={word} setTurn={setTurn} />
        </div>
    );
}

export default Board;

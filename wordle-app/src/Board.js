import './App.css';
import {useEffect, useState} from 'react';
import Row from './Row';

function Board() {

    const [turn, setTurn] = useState(0);
    const [word, setWord] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);

    useEffect(() => {getWord()}, []);

    async function getWord() {
        let word = await fetch("https://random-word-api.herokuapp.com/word?length=5");
        word = await word.json();
        setWord(word[0]);
    }

    const playTurn = (gameWon) => {
        // compare letters to word and colour tiles accordingly, check if game over, increment turn
        if (!gameWon) {
            if (turn === 5) {
                setGameOver(true);
            }
            setTurn(turn+1);
        } else {
            setGameOver(true);
            setTurn(6);
            setWinner(true);
        }
    }

    return (
        <div className="Board">
            {winner ? <h3>You guessed the word in {turn} turns!</h3> : <br></br>}
            {gameOver && !winner ? <h3>Too bad. The word was {word}.</h3> : <br></br>}
            <Row row={0} turn={turn} word={word} playTurn={playTurn} />
            <Row row={1} turn={turn} word={word} playTurn={playTurn} />
            <Row row={2} turn={turn} word={word} playTurn={playTurn} />
            <Row row={3} turn={turn} word={word} playTurn={playTurn} />
            <Row row={4} turn={turn} word={word} playTurn={playTurn} />
            <Row row={5} turn={turn} word={word} playTurn={playTurn} />
        </div>
    );
}

export default Board;

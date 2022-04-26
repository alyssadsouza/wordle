import './App.css';
import Tile from './Tile';

function Row({row, turn, word, setTurn}) {

    const playTurn = () => {
        setTurn(turn+1);
    }
    
    return (
        <form onSubmit={() => playTurn()} className="Row">
        <Tile tile={0} turn={turn} word={word} />
        <Tile tile={1} turn={turn} word={word} />
        <Tile tile={2} turn={turn} word={word} />
        <Tile tile={3} turn={turn} word={word} />
        <Tile tile={4} turn={turn} word={word} />
        </form>
    );
}

export default Row;

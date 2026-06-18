import type { GuessType } from "../types";
import Row from "./Row";

interface GridProps {
    guesses: GuessType[][];
    currentGuess: string;
    turn: number;
}

export default function Grid({ guesses, currentGuess, turn }: GridProps) {
    console.log("guesses in grid: ", guesses);
    console.log("current guess in grid: ", currentGuess);
    console.log("turn in grid: ", turn);
    return (
        <div>
            {guesses.map((guess, index) => {
                if (index === turn) {
                    return (
                        <Row
                            key={index}
                            guess={guess}
                            currentGuess={currentGuess}
                        />
                    );
                }
                return <Row key={index} guess={guess} />;
            })}
        </div>
    );
}

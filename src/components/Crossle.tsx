import { useEffect } from "react";
import useCrossle from "../hooks/useCrossle";

export function Crossle({ solution }: { solution: string }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
        useCrossle(solution);

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);
    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect]);
    return (
        <div>
            <div>current guess: {currentGuess}</div>
            <div>solution guesses: {solution}</div>
        </div>
    );
}

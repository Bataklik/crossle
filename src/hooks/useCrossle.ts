import { useEffect, useState } from "react";
const useCrossle = (solution: string) => {
    const BACKSPACE = "Backspace";
    const ENTER = "Enter";
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = (guess: string) => {};

    const addNewGuess = (guess: string) => {};

    const handleKeyup = ({ key }: { key: string }) => {
        if (key === BACKSPACE) {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }
        if (!/^[a-zA-Z]$/.test(key)) return;
        if (currentGuess.length > 5) return;
        setCurrentGuess((prev) => prev + key);
        console.log(currentGuess);
    };

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyup,
    };
};

export default useCrossle;

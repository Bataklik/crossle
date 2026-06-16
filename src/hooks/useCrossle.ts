import { useEffect, useState } from "react";
const useCrossle = (solution: string) => {
    const BACKSPACE = "Backspace";
    const ENTER = "Enter";
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log("formatting guess");
        console.log("current guess: ", currentGuess);
        const solutionArray: (string | null)[] = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => {
            return { key: letter, color: "grey" };
        });

        formattedGuess.forEach((letter, i) => {
            if (solutionArray[i] === letter.key) {
                formattedGuess[i].color = "green";
                solutionArray[i] = null;
            }
        });
        formattedGuess.forEach((letter, i) => {
            if (
                solutionArray.includes(letter.key) &&
                letter.color !== "green"
            ) {
                formattedGuess[i].color = "yellow";
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        });
        return formattedGuess;
    };

    const addNewGuess = (guess: string) => {};

    const handleKeyup = ({ key }: { key: string }) => {
        if (key === ENTER) {
            if (turn > 5) {
                console.log("you used all your guesses");
                return;
            }
            if (history.includes(currentGuess)) {
                console.log("you already tried that word");
                return;
            }
            if (currentGuess.length !== 5) {
                console.log("guess must be 5 letters long");
                return;
            }
            const formattedGuess = formatGuess();
            console.log(formattedGuess);
        }
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

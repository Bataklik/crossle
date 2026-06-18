import { useState } from "react";
import type { GuessType } from "../types";
const useCrossle = (solution: string) => {
    const BACKSPACE = "Backspace";
    const ENTER = "Enter";
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState<GuessType[][]>([...Array(6)]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        console.log("formatting guess");
        console.log("current guess: ", currentGuess);
        const solutionArray: (string | null)[] = [...solution];
        const formattedGuess = [...currentGuess].map((letter) => {
            return { key: letter, color: "bg-gray-500" };
        });

        formattedGuess.forEach((letter, i) => {
            if (solutionArray[i] === letter.key) {
                formattedGuess[i].color = "bg-green-500";
                solutionArray[i] = null;
            }
        });
        formattedGuess.forEach((letter, i) => {
            if (
                solutionArray.includes(letter.key) &&
                letter.color !== "bg-green-500"
            ) {
                formattedGuess[i].color = "bg-yellow-500";
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        });

        formattedGuess.forEach((letter, i) => {
            const delay = (i + 1) * 250;
            letter.color = `${letter.color} animate-[flip_0.6s_ease-in-out] [animation-delay:${delay}ms]`;
        });

        return formattedGuess;
    };

    const addNewGuess = (formattedGuess: GuessType[]) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }
        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory((prev) => [...prev, currentGuess]);
        setTurn((prev) => prev + 1);
        setCurrentGuess("");
    };

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
            addNewGuess(formattedGuess);
        }
        if (key === BACKSPACE) {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }
        if (!/^[a-zA-Z]$/.test(key)) return;
        if (currentGuess.length >= 5) return;
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

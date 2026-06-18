import type { GuessType } from "../types";
import { RowCell } from "./RowCell";

interface RowProps {
    guess: GuessType[];
    currentGuess?: string;
}

export default function Row({ guess, currentGuess }: RowProps) {
    console.log("guess in row: ", guess);
    console.log("current guess in row: ", currentGuess);
    if (guess) {
        return (
            <div
                id="row"
                className="flex justify-center items-center gap-2 mb-2"
            >
                {guess.map((letter, index) => (
                    <RowCell
                        key={index}
                        guess={letter.key}
                        color={letter.color}
                        style={{
                            animationDelay: `${(index + 1) * 250}ms`,
                        }}
                    />
                ))}
            </div>
        );
    }

    if (currentGuess) {
        const letters = currentGuess.split("");
        return (
            <div
                id="row"
                className="flex justify-center items-center gap-2 mb-2"
            >
                {letters.map((letter, index) => (
                    <RowCell key={index} guess={letter} color={"bg-white"} />
                ))}
                {[...Array(5 - letters.length)].map((_, index) => (
                    <div
                        className={`w-16 h-16 border border-gray-300 flex items-center justify-center text-lg font-bold`}
                        key={index}
                    ></div>
                ))}
            </div>
        );
    }

    return (
        <div id="row" className="flex justify-center items-center gap-2 mb-2">
            <RowCell guess={""} color={"bg-white"} />
            <RowCell guess={""} color={"bg-white"} />
            <RowCell guess={""} color={"bg-white"} />
            <RowCell guess={""} color={"bg-white"} />
            <RowCell guess={""} color={"bg-white"} />
        </div>
    );
}

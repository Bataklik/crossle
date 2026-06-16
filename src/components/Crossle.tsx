import { useEffect } from "react";
import useCrossle from "../hooks/useCrossle";

export function Crossle({ solution }: { solution: string }) {
    const { currentGuess, handleKeyup } = useCrossle(solution);

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => window.removeEventListener("keyup", handleKeyup);
    }, [handleKeyup]);
    return <div>current guess: {currentGuess}</div>;
}

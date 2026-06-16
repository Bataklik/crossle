import { useEffect, useState } from "react";
import "./App.css";
import { Crossle } from "./components/Crossle";

function App() {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                "https://api-334903298972.us-central1.run.app/puzzel_woorden",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
                .then((response) => response.json())
                .then((data) => data.puzzel_woorden)
                .then((result) => {
                    const randomIndex = Math.floor(
                        Math.random() * result.length,
                    );
                    setSolution(result[randomIndex]);
                });
        };
        fetchData();
    }, [setSolution]);
    return (
        <section
            id="center"
            className="flex flex-col items-center justify-center"
        >
            {solution && <Crossle solution={solution} />}
        </section>
    );
}

export default App;

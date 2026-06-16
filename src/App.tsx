import "./App.css";
import { CrossleCell } from "./components/CrossleCell";
import { CrossleRow } from "./components/CrossleRow";
import { useCrossle } from "./hooks/useCrossle";

function App() {
    const { alleWoorden, geheimeWoorden, getGeheimWoord } = useCrossle();
    console.log(alleWoorden);
    console.log(geheimeWoorden);
    console.log(getGeheimWoord());

    return (
        <section
            id="center"
            className="flex flex-col items-center justify-center"
        >
            <div className="bg-grey-400">
                <CrossleRow />
            </div>

            <div className="bg-blue-500">
                <input className="w-full" name="text" />
            </div>
        </section>
    );
}

export default App;

import { CrossleCell } from "./CrossleCell";

export function CrossleRow() {
    return (
        <div className="flex">
            <CrossleCell value={"C"} />
            <CrossleCell value={"R"} />
            <CrossleCell value={"O"} />
            <CrossleCell value={"S"} />
            <CrossleCell value={"S"} />
        </div>
    );
}

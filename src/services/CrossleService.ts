import type { AlleWoorden, PuzzleWoorden } from "../types";

export const CrossleService = {
    GetAlleWoorden: async () => {
        // https://api-334903298972.us-central1.run.app/alle_woorden
        const response = await fetch(
            "https://api-334903298972.us-central1.run.app/alle_woorden",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        const data: Promise<AlleWoorden> = response.json();
        return data;
    },
    GetHeimeWoorden: async () => {
        const response = await fetch(
            "https://api-334903298972.us-central1.run.app/puzzel_woorden",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        const data: Promise<PuzzleWoorden> = response.json();
        return data;
    },
};

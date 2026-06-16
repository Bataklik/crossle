import { useEffect, useState } from "react";
import { CrossleService } from "../services/CrossleService";

export const useCrossle = () => {
    const [alleWoorden, setAlleWoorden] = useState<string[]>([]);
    const [geheimeWoorden, setGeheimeWoorden] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            await CrossleService.GetAlleWoorden().then((res) =>
                setAlleWoorden(res.alle_woorden),
            );
            await CrossleService.GetHeimeWoorden().then((res) =>
                setGeheimeWoorden(res.puzzel_woorden),
            );
        };
        console.log(alleWoorden);
        console.log(geheimeWoorden);

        fetchData();
    }, []);
    const getGeheimWoord = () => {
        const rnd = Math.floor(Math.random() * geheimeWoorden.length);
        const rndWord = geheimeWoorden[rnd];
        console.log(rndWord);
        return rndWord;
    };

    return { alleWoorden, geheimeWoorden, getGeheimWoord };
};

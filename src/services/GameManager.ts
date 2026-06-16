import { useCrossle } from "../hooks/useCrossle";

export const GameManager = () => {
    const alleWoorden = useCrossle().alleWoorden;
    const geheimeWoorden = useCrossle().geheimeWoorden;
    let geheimewoord = useCrossle().getGeheimWoord;
};

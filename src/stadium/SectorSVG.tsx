import {Place, sectorData, SECTORS_ROW_Y} from "./TSector.ts";
import {useMemo, useState} from "react";
import './sector.css';

interface ISectorData {
    sector_name: number;
}

interface PlaceChosen {
    sector: number;
    row: number;
    place: number;
}

function isPlaceEquals(p1: PlaceChosen, p2: PlaceChosen): boolean {
    return p1.place === p2.place
        && p1.row === p2.row
        && p1.sector === p2.sector
}

export default function SectorSVG({sector_name}: ISectorData) {
    const sector = useMemo(() => sectorData.get(sector_name), [sector_name]);
    const [selectedPlaces, setSelectedPlaces] = useState<PlaceChosen[]>([])
    if (!sector) {
        throw new Error('Sector not found');
    }

    function handlePlace(place: PlaceChosen) {
        console.log(`Sector: ${place.sector} Place: ${place.place} Row: ${place.row}`);
        if (isPlaceExistInList(place)) {
            setSelectedPlaces(prevState =>
                [...prevState.filter(p => !(isPlaceEquals(p, place)))])
            return;
        }
        setSelectedPlaces(prevState => [...prevState, place])
    }

    function isPlaceExistInList(place: PlaceChosen): boolean {
        return selectedPlaces.some((p: PlaceChosen) => isPlaceEquals(p, place))
    }

    return (
        <g className="map-sector">
            <g transform={`translate(${sector.transform.x}, ${sector.transform.y})`}>
                <text fontSize="600" fontWeight="700" fill="#223C75">
                    <tspan x={`${sector.location.x}`} y={`${sector.location.y}`}>
                        {sector.name}
                    </tspan>
                </text>
            </g>

            {/* Рендеринг місць у зворотному порядку для того, щоб tooltip показувався над колом*/}
            {sector.places.slice().reverse().map((place: Place, index: number) => {
                const row: number = sector.places.length - index;

                return Array.from({length: place.count}, (_, i) => {
                    const xPosition = place.x_start + i * 50; // Обчислення позиції x для кожного кола
                    let color = place.sold ? "gray" : "green";

                    const p: PlaceChosen = {sector: sector_name, row: row, place: i + 1}
                    if (isPlaceExistInList(p)) {
                        color = "blue"
                    }
                    return (
                        <g
                            key={`point-${place.row}-${i}`}
                            onClick={place.sold
                                ? () => {
                                }
                                : () => handlePlace(p)}
                            className="map-point"
                            transform={`matrix(1 0 0 1 ${xPosition} ${SECTORS_ROW_Y[row - 1]})`}
                        >
                            {/* Коло для місця */}
                            <circle
                                cx="0"
                                cy="0"
                                r="20"
                                fill={color}
                                id={`point-${place.row}-${i}`}
                                className={"hoverable-circle " + (place.sold ? "sold" : "")}
                            ></circle>
                            {/*Підказка*/}
                            <foreignObject
                                id={`tooltip-${place.row}-${i}`}
                                cx="0"
                                x="-222" y="-180" width="450" height="300" rx="10" ry="10"
                                className="tooltip-group"
                            >
                                <div className="tooltip-content">
                                    {place.sold && (<div>Це місце зайнято</div>)}
                                    {!place.sold && (<>
                                        <div>{row} Ряд, {i + 1} Місце</div>
                                        <div>Ціна: 1900 грн</div>
                                    </>)}
                                </div>
                            </foreignObject>
                        </g>
                    );
                });
            })}
        </g>
    );
}

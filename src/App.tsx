import {MouseEvent, useEffect, useRef, useState, WheelEvent} from "react";
import StadiumSVG from "./stadium/StadiumSVG.tsx";
import SectorSVG from "./stadium/SectorSVG.tsx";
import {SECTORS} from "./stadium/TSector.ts";
import './App.css'

const SVG_WIDTH = 1300;
const SVG_HEIGHT = 850;
const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 600;
const MIN_SCALE = 0.1;
const MAX_SCALE = 10;

const App = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [scale, setScale] = useState(1); // Зум
    const [position, setPosition] = useState({x: 0, y: 0}); // Позиція по X та Y
    const [isDragging, setIsDragging] = useState(false); // Статус перетягування
    const [startPoint, setStartPoint] = useState({x: 0, y: 0});

    // Обробка події колеса миші для зуму
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleWheel = (event: WheelEvent) => {
        event.preventDefault(); // Запобігаємо стандартному скролінгу сторінки

        const newScale = Math.min(
            Math.max(scale - event.deltaY * 0.001, MIN_SCALE),
            MAX_SCALE
        ); // Обмеження зуму

        // Знаходимо координати курсора в масштабованому просторі
        const svgElement = svgRef.current;
        if (!svgElement) return

        const rect = svgElement.getBoundingClientRect();
        const cursorX = event.clientX - rect.left; // Відносна позиція курсора по X
        const cursorY = event.clientY - rect.top; // Відносна позиція курсора по Y

        // Обчислюємо нову позицію для центрованого зуму
        const newX =
            position.x - (cursorX / scale) * (newScale - scale);
        const newY =
            position.y - (cursorY / scale) * (newScale - scale);

        setScale(newScale);
        setPosition({x: newX, y: newY});
    };

    // Додаємо обробник події для колеса миші
    useEffect(() => {
        const svgElement = svgRef.current;
        if (svgElement) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            svgElement.addEventListener("wheel", handleWheel, {passive: false});
        }
        return () => {
            if (svgElement) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                svgElement.removeEventListener("wheel", handleWheel);
            }
        };
    }, [scale, position, handleWheel]);

    // Початок перетягування
    const handleMouseDown = (event: MouseEvent) => {
        setIsDragging(true);
        setStartPoint({x: event.clientX - position.x, y: event.clientY - position.y});
    };

    // Завершення перетягування
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Перетягування мишею
    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;
        const newX = event.clientX - startPoint.x;
        const newY = event.clientY - startPoint.y;

        // Обмеження позиції, щоб не виходити за межі
        const clampedX = Math.min(0, Math.max(newX, CONTAINER_WIDTH - SVG_WIDTH * scale));
        const clampedY = Math.min(0, Math.max(newY, CONTAINER_HEIGHT - SVG_HEIGHT * scale));

        setPosition({x: clampedX, y: clampedY});
    };

    return (
        <div
            className="scroll-container"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <svg
                ref={svgRef}
                width={SVG_WIDTH}
                height={SVG_HEIGHT}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: "0 0",
                }}
            >
                <g style={{transform: "matrix(0.0435, 0, 0, 0.0435, 27.8165, -1.21992e-05)"}}>
                    <StadiumSVG/>
                    <SectorSVG sector_name={SECTORS.ONE}/>
                    <SectorSVG sector_name={SECTORS.TWO}/>
                    <SectorSVG sector_name={SECTORS.THREE}/>
                    <SectorSVG sector_name={SECTORS.FOUR}/>
                    <SectorSVG sector_name={SECTORS.FIVE}/>
                </g>
            </svg>
        </div>
    );
};

export default App;

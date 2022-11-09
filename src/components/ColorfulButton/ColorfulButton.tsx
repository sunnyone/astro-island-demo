import type {ReactNode} from "react";
import {useState, useEffect} from "react";
import styles from "./ColorfulButton.module.css";

export interface ColorfulButtonProps {
    children?: ReactNode;
    label?: ReactNode;
}

const colors = ["red", "green"];


export const ColorfulButton: React.FC<ColorfulButtonProps> = ({children, label}) => {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        let timeoutId: number;
        
        const setup = () => {
            timeoutId = setTimeout(() => {
                setColorIndex((i) => (i + 1) % colors.length);
                setup();
            }, 500);
        }

        setup();
        
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return <button className={styles.button} style={{"--button-bgcolor": colors[colorIndex]} as any}>
        {children}
        {label}
    </button>;
}
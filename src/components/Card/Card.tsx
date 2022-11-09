import type {ReactNode} from "react";
import styles from "./Card.module.css";

export interface CardProps {
    title?: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({title, children}) => {
    return <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
            {children}
        </div>
    </div>;
}
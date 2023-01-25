import { useGeoLocation } from "../hooks/useGeoLocation.hooks";
import styles from "./Header.module.css";

export const Header = ({ className, title, body }) => {
    const country: string = useGeoLocation();

    return (
        <>
            <div className={className}>
                <h2 className={styles.title}>
                    {title} {country}
                    <span> &rarr; </span>
                </h2>
                <p className={styles.body}>{body}</p>
            </div>
        </>
    );
};

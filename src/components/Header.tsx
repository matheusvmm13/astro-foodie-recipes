import styles from "./Header.module.css";

const response = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=9d92bf811c2d4a569c3403f33637a2fa`);
const userLocation: Record<string, any> = await response.json();

export const Header = ({ className, title, body }) => {
    
    return(
        <>
            <div className={className}>
                <h2 className={styles.title}>
                    {title} {userLocation.country.name ?? 'your country'}
                    <span> &rarr; </span>
                </h2>
                <p className={styles.body}>{body}</p>
            </div>
        </>
    )
};

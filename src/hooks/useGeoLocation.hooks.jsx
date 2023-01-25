import { useEffect, useState } from "preact/hooks";

let CACHE = "";
const initialState = "your country";

export const useGeoLocation = () => {
    const [country, setCountry] = useState(initialState);

    useEffect(() => {
        const successfulLookup = async (position) => {
            const { latitude, longitude } = position.coords;
    
            if (CACHE !== initialState) {
                setCountry(CACHE);
                return CACHE;
            };
    
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.PUBLIC_OPENCAGEDATA_API_KEY}`
            );
            const userLocation = await response.json();
            setCountry(userLocation.results[0]?.components?.country);
            CACHE = country;
        };

        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                successfulLookup,
                console.error
            );
        } else {
            console.warn("Geolocation is NOT available");
        }
    }, [country]);

    return country;
};
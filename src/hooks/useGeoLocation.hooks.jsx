import { useEffect, useState } from "preact/hooks";

let CACHE = "";

export const useGeoLocation = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        const successfulLookup = async (position) => {
            const { latitude, longitude } = position.coords;
    
            if (CACHE.length > 3) {
                setCountry(CACHE);
                console.log("taking from cached country", CACHE);
                return CACHE;
            };
    
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.PUBLIC_OPENCAGEDATA_API_KEY}`
            );
            const userLocation = await response.json();
            setCountry(userLocation.results[0]?.components?.country);
            CACHE = country;
            console.log("cache value:", CACHE);
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
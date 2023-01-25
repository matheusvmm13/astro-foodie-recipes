import { useEffect, useState } from "preact/hooks";

export const useGeoLocation = () => {
    const [country, setCountry] = useState("...");

    const successfulLookup = async (position) => {
        const { latitude, longitude } = position.coords;
        
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${import.meta.env.PUBLIC_OPENCAGEDATA_API_KEY}`
        );
        const userLocation = await response.json();
        setCountry(userLocation.results[0]?.components?.country);
    };

    useEffect(() => {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                successfulLookup,
                console.error
            );
        } else {
            console.warn("Geolocation is NOT available");
        }
    }, []);
    
    return country;
};
export const getUserLocation = async () => {
    try {
        const response: Response = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${import.meta.env.PUBLIC_GEOAPIFY_API_KEY}`, { method: 'GET' });
        const location = await response.json();
        return location;
    } catch (error) {
        console.error('Couldnt get user location: ', error);
        return 'your country';
    }
}
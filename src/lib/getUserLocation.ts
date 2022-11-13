export const getUserLocation = async () => {
    try {
        const response: Response = await fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=9d92bf811c2d4a569c3403f33637a2fa", { method: "GET" });
        const location: any = await response.json();
        return location;
    } catch (error) {
        console.error('Couldnt get user location: ', error);
        return 'your country';
    }
}
export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=2`);
        if (!response.ok) throw new Error('Weather service error');
        return await response.text();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchUserLocation = async () => {
    try {
        const response = await fetch('http://ip-api.com/json');
        const data = await response.json();
        return data.city?.toLowerCase() || 'remote';
    } catch {
        return 'remote';
    }
};

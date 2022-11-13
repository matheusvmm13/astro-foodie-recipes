export const getUserSeason = () => {
    let currentMonth: number = new Date().getMonth();
    let userSeason: string = '';

    if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
        userSeason = 'Winter';
    } else if (currentMonth === 2 || currentMonth === 3 || currentMonth === 4) {
        userSeason = 'Spring';
    } else if (currentMonth === 5 || currentMonth === 6 || currentMonth === 7) {
        userSeason = 'Summer';
    } else {
        userSeason = 'Autumn';
    };
    return userSeason;
}
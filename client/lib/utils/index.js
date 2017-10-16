const getRandomBetween = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

export const getUserId = () => {
    let userId = localStorage.getItem('startherUserId');
    if (!userId) {
        userId = getRandomBetween(1, 15000000);
        localStorage.setItem('startherUserId', userId);
    }
    return userId;
};

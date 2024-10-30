export const getDecemberDates = () => {
    const dates = []

    for (let day = 1; day <= 31; day++) {
        dates.push(day);
    }

    return { dates }
}

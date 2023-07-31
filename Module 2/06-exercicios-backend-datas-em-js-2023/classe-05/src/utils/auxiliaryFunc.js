function isOpen(time) {
    const hour = new Date(time)

    const isBefore8 = hour.getHours() < 8;
    const isAfter18 = (hour.getHours() > 18);

    // I created this just for the reason when it's 18h to check the last minute.
    // In any other circunstance this will return true
    // The previous variables will protect against any inconsistence or return the wrong anwser
    const isValidMinutes = (hour.getHours() === 18 && hour.getMinutes() > 0) ? false : true;

    let isValidWeekDay = (hour.getDay() === 0) ? false : true;
    //____________________________________________________________________________________________________________

    if (hour.getDay() === 6) {
        const closedEarly = hour.getHours() < 8;
        const closedLate = (hour.getHours() > 12);
        const isMinutesSaturday = (hour.getHours() === 12 && hour.getMinutes() > 0) ? false : true;

        isValidWeekDay = !closedEarly && !closedLate && isMinutesSaturday;

        return isValidWeekDay;
    };
    //____________________________________________________________________________________________________________

    const isValidHour = !isBefore8 && !isAfter18 && isValidMinutes && isValidWeekDay;

    return isValidHour;
};
//===============================================================================================================================

module.exports = {
    isOpen
};

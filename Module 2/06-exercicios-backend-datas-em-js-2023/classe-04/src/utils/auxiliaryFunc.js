function isOpen(time) {
    const hour = new Date(time)

    const isBefore8 = hour.getHours() < 8;
    const isAfter18 = (hour.getHours() > 18);

    // I created this just for the reason when it's 18h to check the last minute.
    // In any other circunstance this will return true
    // The previous variables will protect against any inconsistence or return the wrong anwser
    let isValidMinutes = (hour.getHours() === 18 && hour.getMinutes() > 0) ? false : true;

    const isWeekDay = (hour.getDay() !== 0) && (hour.getDay() !== 6);

    const isValidHour = !isBefore8 && !isAfter18 && isValidMinutes && isWeekDay;

    return isValidHour
};

module.exports = {
    isOpen
};
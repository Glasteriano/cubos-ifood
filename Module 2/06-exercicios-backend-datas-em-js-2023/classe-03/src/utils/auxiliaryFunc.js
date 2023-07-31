function isOpen(time) {
    const hour = new Date(time)

    const isBefore8 = hour.getHours() < 8;
    const isAfter18 = (hour.getHours() > 18);

    const isValidHour = !isBefore8 && !isAfter18;

    return isValidHour
};

module.exports = {
    isOpen
};
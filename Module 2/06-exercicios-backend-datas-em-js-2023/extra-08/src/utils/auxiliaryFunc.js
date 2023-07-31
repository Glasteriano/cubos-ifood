const { format } = require("date-fns")

function date1(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "dd 'de' LLLL 'de' yyyy");

    return formatedDate;
};
//_____________________________________________________________________________

function date2(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "dd/MM/yyyy");

    return formatedDate;
};
//_____________________________________________________________________________

function date3(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "d MMM");

    return formatedDate;
};
//_____________________________________________________________________________

function date4(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "dd MMM yyyy");

    return formatedDate;
};
//_____________________________________________________________________________

function date5(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "dd 'de' MMM 'de' yyyy");

    return formatedDate;
};
//_____________________________________________________________________________

function date6(date) {
    const dateF = new Date(date)
    const formatedDate = format(dateF, "dd/MMM");

    return formatedDate;
};
//=================================================================================================

module.exports = {
    date1,
    date2,
    date3,
    date4,
    date5,
    date6
};
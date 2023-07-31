const promoBegins = new Date(2023, 7, 1);
const promoEnds = (+promoBegins) + (1_000 * 60 * 60 * 24);  // milisseconds * seconds * minutes * hours

const consumerReq = new Date(2023, 7, 1, 18);

const isValidPromo = ((+consumerReq) <= promoEnds) ? true : false;

console.log(isValidPromo);
function checkPromo(promoBegins, consumerReq) {
    const promoStart = new Date(promoBegins);
    const promoEnds = (+promoStart) + (1_000 * 60 * 60 * 24 * 30);  // milisseconds * seconds * minutes * hours * days

    const consumerAsk = new Date(consumerReq);

    const isValidPromo = ((+consumerAsk) <= promoEnds) ? true : false;

    return isValidPromo;
};

module.exports = {
    checkPromo
};
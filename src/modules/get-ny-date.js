const getNYDate = () => {
    const today = new Date();
    return new Date(`December 31, ${today.getFullYear()} 23:59:59 GMT-0000`).toUTCString();
};

module.exports = getNYDate;
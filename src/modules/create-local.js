const createLocal = (local) => {
    if (!local && !['RU', 'EN', 'DE'].includes(local)) {
        return 'RU';
    } else {
        return local;
    }
    return local;
};

module.exports = createLocal;
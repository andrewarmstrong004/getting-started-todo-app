const GREETING = 'Hello world! How is it going?';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};

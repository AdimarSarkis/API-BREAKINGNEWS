const soma = (req, res) => {
    const soma = 1 + 100;
    res.send({soma: soma});
}

module.exports = {soma};
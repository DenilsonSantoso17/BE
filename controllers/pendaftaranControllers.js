const {prisma} = require('../config/prisma');

const getPendaftaranControllers = async (req, res) => {
    const pendaftaran = getPendaftaranControllers()
    res.status(200).json(pendaftaran) }

    module.exports = {getPendaftaranControllers}
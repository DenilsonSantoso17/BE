const express = require('express');
const pendaftaranRoutes = express.Router();
const {prisma} = require('../config/prisma');
const {getPendaftaranControllers} = require('../controllers/pendaftaranControllers');

//rute get untuk pendaftaran
pendaftaranRoutes.get('/', getPendaftaranControllers)

//rute post untuk pendaftaran
pendaftaranRoutes.post('/', async (req, res) => {
    const { nama, email, jenis_konseling, pilihan_dokter } = req.body;
    console.log(req.body);
    const createPendaftaran = await prisma.pendaftaran.create({
        data: {
            nama,
            email,
            jenis_konseling,
            pilihan_dokter
        }
    })
    res.status(201).json({
        message : "Pendaftaran Berhasil",
        data : createPendaftaran
    })
})


module.exports = {pendaftaranRoutes}
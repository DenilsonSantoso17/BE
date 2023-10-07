const express = require('express');
const ourteamRoutes = express.Router();
const {prisma} = require('../config/prisma');

//rute get untuk ourteam
ourteamRoutes.get('/ourteam', async (req, res) => {
    const ourteam = await prisma.ourTeam.findMany();
    res.status(200).json(ourteam)
})

//rute post untuk ourteam
ourteamRoutes.post('/ourteam', async (req, res) => {
    const { role, nama, prodi, Univ } = req.body;
    console.log(req.body);
    const createOurteam = await prisma.ourteam.create({
        data: {
            role,
            nama,
            prodi,
            Univ
        }
    })
    res.status(201).json({
        message : "Data Telah Ditambhakan",
        data : createOurteam
    })
})

module.exports = {ourteamRoutes}
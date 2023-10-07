const express = require('express');
const feedbackRoutes = express.Router();
const {prisma} = require('../config/prisma');

//rute get untuk feedback
feedbackRoutes.get('/feedback', async (req, res) => {
    const feedback = await prisma.feedback.findMany();
    res.status(200).json(feedback)
})

//rute post untuk feedback
feedbackRoutes.post('/feedback', async (req, res) => {
    const { nama, pesan } = req.body;
    console.log(req.body);
    const createFeedback = await prisma.feedback.create({
        data: {
            nama,
            pesan,
        }
    })
    res.status(201).json({
        message : "Ulasan Telah Di Buat",
        data : createFeedback
    })
})

module.exports = {feedbackRoutes}

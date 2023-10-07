require('dotenv').config;

const cors = require('cors');
const express = require('express');

const {prisma} = require('./config/prisma')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari FrontEnd
app.use(express.json()) //parse request body dari JSON ke Object
app.use(express.urlencoded({ extended : true })) //parse request body dari x-www-form-urlencoded ke object 


app.get('/', (req, res) => {
    res.send('Hello  dfdsfsfdd World');
});

//rute untuk product
app.get('/pendaftaran', async (req, res) => {
    const pendaftaran = await prisma.pendaftaran.findMany();
    res.status(200).json(pendaftaran)
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
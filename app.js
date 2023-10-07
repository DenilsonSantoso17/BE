require('dotenv').config;

const cors = require('cors');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari FrontEnd
app.use(express.json()) //parse request body dari JSON ke Object
app.use(express.urlencoded({ extended : true })) //parse request body dari x-www-form-urlencoded ke object 


app.get('/', (req, res) => {
    res.send('Hello  dfdsfsfdd World');
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
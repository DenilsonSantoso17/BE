const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello  dfdsfsfdd World');
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi from my mac server!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

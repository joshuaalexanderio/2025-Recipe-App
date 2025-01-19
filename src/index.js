const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

// serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/about', (req, res) =>
    res.json({message: 'This is the about page!'})
)


app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}`)
    });

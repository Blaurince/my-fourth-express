import express from 'express';

const PORT = 3050;

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello Nephie");
});

app.listen(PORT, () => {
    console.log(`listening on  http://localhost:${PORT}...`);
});


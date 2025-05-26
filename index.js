const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const user = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    { id: 2, name: 'Sahana', email: 'sahana@gmail.com'},
    { id: 3, name: 'Sabnoor', email: 'sabnoor@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('Users management server is running');
});

app.get('/users', (req, res) => {
    res.send(user);
});

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

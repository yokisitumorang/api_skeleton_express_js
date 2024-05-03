const express = require('express');
const app = express();
const routes = require('./routes/route');

app.listen(3000, () => {
    console.log('API server is running on port 3000');
});

app.use('/', routes);


// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.get('/api', (req, res) => {
//     // Access the request parameter using req.query
//     const { request1, request2 } = req.query;

//     // Perform some logic based on the request parameter
//     // ...

//     // Send a response back to the client
//     res.send(`${request1} ${request2}`);
// });



